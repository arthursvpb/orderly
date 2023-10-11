export interface IPaymentRepository {
  save(payment: Payment): Promise<Payment>;
  findById(id: string): Promise<Payment | null>;
  findAll(): Promise<Payment[]>;
}
