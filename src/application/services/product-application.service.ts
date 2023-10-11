import { IProductRepository } from '@/domain/repositories/product-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductApplicationService {
  constructor(private readonly productRepository: IProductRepository) {}

  // Add methods to handle Product-specific operations
}
