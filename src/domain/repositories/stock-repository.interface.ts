import { Product } from '@/domain/entities/Product';
import { Stock } from '@/domain/entities/Stock';

export interface IStockRepository {
  save(stock: Stock): Promise<void>;
  findByProductId(productId: string): Promise<Product | null>;
  findAll(): Promise<Stock[]>;
  remove(stockId: string): Promise<void>;
  updateStock(stockId: string, quantity: number): Promise<void>;
}
