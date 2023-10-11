import { Product } from '@/domain/entities/Product';
import { IProductRepository } from '@/domain/repositories/product-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaProductRepository implements IProductRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(product: Product): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
