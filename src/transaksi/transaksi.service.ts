import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransaksiService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.transaksi.findMany({
      include: { detail: { include: { barang: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  findHariIni() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return this.prisma.transaksi.findMany({
      where: { createdAt: { gte: start, lte: end } },
      include: { detail: { include: { barang: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: {
    bayar: number;
    items: { barangId: number; qty: number }[];
  }) {
    let total = 0;
    const detailData: { barangId: number; qty: number; hargaSatuan: number; subtotal: number }[] = [];

    for (const item of data.items) {
      const barang = await this.prisma.barang.findUnique({ where: { id: item.barangId } });
      if (!barang) throw new BadRequestException(`Barang id ${item.barangId} tidak ditemukan`);
      if (barang.stok < item.qty) throw new BadRequestException(`Stok ${barang.nama} tidak cukup`);

      const subtotal = barang.harga * item.qty;
      total += subtotal;
      detailData.push({ barangId: item.barangId, qty: item.qty, hargaSatuan: barang.harga, subtotal });
    }

    if (data.bayar < total) throw new BadRequestException('Uang bayar kurang');
    const kembalian = data.bayar - total;

    return this.prisma.$transaction(async (tx) => {
      const transaksi = await tx.transaksi.create({
        data: {
          total, bayar: data.bayar, kembalian,
          detail: { create: detailData },
        },
        include: { detail: { include: { barang: true } } },
      });

      for (const item of data.items) {
        await tx.barang.update({
          where: { id: item.barangId },
          data: { stok: { decrement: item.qty } },
        });
      }

      return transaksi;
    });
  }

  async createManual(data: {
    bayar: number;
    total: number;
    kembalian: number;
    items: { barangId: number; qty: number }[];
    detail: { barangId: number; qty: number; hargaSatuan: number; subtotal: number }[];
  }) {
    if (data.bayar < data.total) throw new BadRequestException('Uang bayar kurang');

    return this.prisma.$transaction(async (tx: any) => {
      const transaksi = await tx.transaksi.create({
        data: {
          total: data.total,
          bayar: data.bayar,
          kembalian: data.kembalian,
          detail: {
            create: data.detail.map(d => ({
              barangId: d.barangId,
              qty: d.qty,
              hargaSatuan: d.hargaSatuan,
              subtotal: d.subtotal,
            }))
          }
        },
        include: { detail: { include: { barang: true } } }
      });

      // Hanya kurangi stok untuk item bungkus
      for (const item of data.items) {
        if (item.qty > 0) {
          await tx.barang.update({
            where: { id: item.barangId },
            data: { stok: { decrement: item.qty } }
          });
        }
      }

      return transaksi;
    });
  }

  async getLaporan() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const transaksi = await this.prisma.transaksi.findMany({
      where: { createdAt: { gte: start } },
      include: { detail: { include: { barang: true } } },
    });

    const totalPendapatan = transaksi.reduce((s, t) => s + t.total, 0);
    const jumlahTransaksi = transaksi.length;

    const itemCount: Record<string, { nama: string; qty: number }> = {};
    for (const t of transaksi) {
      for (const d of t.detail) {
        if (!itemCount[d.barangId]) {
          itemCount[d.barangId] = { nama: d.barang.nama, qty: 0 };
        }
        itemCount[d.barangId].qty += d.qty;
      }
    }

    const terlaris = Object.values(itemCount)
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 5);

    return { totalPendapatan, jumlahTransaksi, terlaris };
  }
}