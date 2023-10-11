import { Admin } from '@/domain/entities/Admin';
import { IAdminRepository } from '@/domain/repositories/admin-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaAdminRepository implements IAdminRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(admin: Admin): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(adminId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByUsername(username: string): Promise<Admin | null> {
    throw new Error('Method not implemented.');
  }
  findById(adminId: string): Promise<Admin | null> {
    throw new Error('Method not implemented.');
  }
}
