import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService implements OnModuleInit {
  private client: any;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PrismaClient } = require('@prisma/client');
    const connectionString = process.env.DATABASE_URL;
    console.log('DATABASE_URL:', connectionString ? 'found' : 'NOT FOUND');
    const adapter = new PrismaPg({ connectionString });
    this.client = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  get user() { return this.client.user; }
  get barang() { return this.client.barang; }
  get kategori() { return this.client.kategori; }
  get transaksi() { return this.client.transaksi; }
  get detailTransaksi() { return this.client.detailTransaksi; }
  $transaction(...args: any[]) {
    return this.client.$transaction(...args);
  }
}