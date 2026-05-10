import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: { username: string; password: string; nama: string }) {
    const existing = await this.prisma.user.findUnique({ where: { username: data.username } });
    if (existing) throw new ConflictException('Username sudah dipakai');

    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { username: data.username, password: hash, nama: data.nama },
    });

    return { message: 'Registrasi berhasil', username: user.username };
  }

  async login(data: { username: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { username: data.username } });
    if (!user) throw new UnauthorizedException('Username atau password salah');

    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) throw new UnauthorizedException('Username atau password salah');

    const token = this.jwtService.sign({
      sub: user.id,
      username: user.username,
      nama: user.nama,
    });

    return { access_token: token, nama: user.nama, username: user.username };
  }

  async getProfile(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, nama: true, createdAt: true },
    });
  }
}