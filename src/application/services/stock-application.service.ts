import { IStockRepository } from '@/domain/repositories/stock-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StockApplicationService {
  constructor(private readonly stockRepository: IStockRepository) {}

  // Methods to handle Stock-specific operations
}
