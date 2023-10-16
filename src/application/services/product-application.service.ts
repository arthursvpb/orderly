import { IProductRepository } from '@/domain/repositories/product-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductApplicationService {
  constructor(private readonly productRepository: IProductRepository) {}

  // Methods to handle Product-specific operations
}
