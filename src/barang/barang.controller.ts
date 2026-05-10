import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BarangService } from './barang.service';

@Controller('barang')
export class BarangController {
  constructor(private readonly barangService: BarangService) {}

  @Get()
  findAll() {
    return this.barangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.barangService.findOne(id);
  }

  @Post()
  create(@Body() body: { nama: string; harga: number; stok: number; kategoriId: number }) {
    return this.barangService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { nama?: string; harga?: number; stok?: number; kategoriId?: number },
  ) {
    return this.barangService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.barangService.remove(id);
  }
}