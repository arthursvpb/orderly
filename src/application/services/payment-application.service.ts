import { IPaymentRepository } from '@/domain/repositories/payment-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentApplicationService {
  constructor(private readonly paymentRepository: IPaymentRepository) {}

  // Add methods to handle Payment-specific operations
}
