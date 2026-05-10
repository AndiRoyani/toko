import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransaksiService } from './transaksi.service';

@Controller('transaksi')
export class TransaksiController {
  constructor(private readonly transaksiService: TransaksiService) {}

  @Get()
  findAll() {
    return this.transaksiService.findAll();
  }

  @Get('hari-ini')
  findHariIni() {
    return this.transaksiService.findHariIni();
  }

  @Get('laporan')
  getLaporan() {
    return this.transaksiService.getLaporan();
  }

  @Post()
  create(@Body() body: { bayar: number; items: { barangId: number; qty: number }[] }) {
    return this.transaksiService.create(body);
  }
}