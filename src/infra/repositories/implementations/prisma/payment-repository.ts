import { Payment } from '@/domain/entities/Payment';
import { IPaymentRepository } from '@/domain/repositories/payment-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaPaymentRepository implements IPaymentRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(payment: Payment): Promise<Payment> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Payment | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Payment[]> {
    throw new Error('Method not implemented.');
  }
}
