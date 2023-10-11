import { Order } from '@/domain/entities/Order';
import { IOrderRepository } from '@/domain/repositories/order-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaOrderRepository implements IOrderRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(order: Order): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Order | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }
}
