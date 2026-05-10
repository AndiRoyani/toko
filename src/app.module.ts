import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { BarangModule } from './barang/barang.module';
import { TransaksiModule } from './transaksi/transaksi.module';
import { KategoriModule } from './kategori/kategori.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BarangModule, TransaksiModule, KategoriModule, AuthModule],
})
export class AppModule {}