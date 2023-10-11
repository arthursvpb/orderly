import { Product } from '@/domain/entities/Product';
import { Stock } from '@/domain/entities/Stock';
import { IStockRepository } from '@/domain/repositories/stock-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaStockRepository implements IStockRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(stock: Stock): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByProductId(productId: string): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Stock[]> {
    throw new Error('Method not implemented.');
  }
  remove(stockId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateStock(stockId: string, quantity: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
