import { IOrderRepository } from '@/domain/repositories/order-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderApplicationService {
  constructor(private readonly orderRepository: IOrderRepository) {}

  // Add methods to handle Order-specific operations
}
