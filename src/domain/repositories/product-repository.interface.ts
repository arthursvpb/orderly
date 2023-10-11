import { Product } from '@/domain/entities/Product';

export interface IProductRepository {
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
}
