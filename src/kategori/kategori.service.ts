import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class KategoriService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.kategori.findMany({
      orderBy: { nama: 'asc' },
      include: { _count: { select: { barang: true } } },
    });
  }

  create(data: { nama: string }) {
    return this.prisma.kategori.create({ data });
  }
}