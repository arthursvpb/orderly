import { Payment } from '@/domain/entities/Payment';

export interface IPaymentRepository {
  save(payment: Payment): Promise<Payment>;
  findById(id: string): Promise<Payment | null>;
  findAll(): Promise<Payment[]>;
}
