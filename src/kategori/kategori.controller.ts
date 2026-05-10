import { Controller, Get, Post, Body } from '@nestjs/common';
import { KategoriService } from './kategori.service';

@Controller('kategori')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  @Get()
  findAll() {
    return this.kategoriService.findAll();
  }

  @Post()
  create(@Body() body: { nama: string }) {
    return this.kategoriService.create(body);
  }
}