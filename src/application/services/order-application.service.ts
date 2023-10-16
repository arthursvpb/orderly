import { IOrderRepository } from '@/domain/repositories/order-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderApplicationService {
  constructor(private readonly orderRepository: IOrderRepository) {}

  // Methods to handle Order-specific operations
}
