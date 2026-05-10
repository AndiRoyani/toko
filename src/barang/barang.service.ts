import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BarangService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.barang.findMany({
      include: { kategori: true },
      orderBy: { nama: 'asc' },
    });
  }

  async findOne(id: number) {
    const barang = await this.prisma.barang.findUnique({
      where: { id },
      include: { kategori: true },
    });
    if (!barang) throw new NotFoundException('Barang tidak ditemukan');
    return barang;
  }

create(data: {
  nama: string;
  harga: number;
  stok: number;
  kategoriId: number;
  satuanKecil?: string | null;
  hargaSatuanKecil?: number | null;
  jumlahPerSatuan?: number | null;
}) {
  return this.prisma.barang.create({
    data: {
      ...data,
      satuanKecil: data.satuanKecil ?? null,
      hargaSatuanKecil: data.hargaSatuanKecil || null,
      jumlahPerSatuan: data.jumlahPerSatuan || null,
    },
    include: { kategori: true }
  });
}

update(id: number, data: {
  nama?: string;
  harga?: number;
  stok?: number;
  kategoriId?: number;
  satuanKecil?: string | null;
  hargaSatuanKecil?: number | null;
  jumlahPerSatuan?: number | null;
}) {
  return this.prisma.barang.update({
    where: { id },
    data: {
      ...data,
      satuanKecil: data.satuanKecil ?? null,
      hargaSatuanKecil: data.hargaSatuanKecil || null,
      jumlahPerSatuan: data.jumlahPerSatuan || null,
    },
    include: { kategori: true },
  });
}

  remove(id: number) {
    return this.prisma.barang.delete({ where: { id } });
  }
}