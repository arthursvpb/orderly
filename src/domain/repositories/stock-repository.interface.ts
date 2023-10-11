export interface IStockRepository {
  save(stock: Stock): Promise<void>;
  findByProductId(productId: string): Promise<Stock | null>;
  findAll(): Promise<Stock[]>;
  remove(stockId: string): Promise<void>;
  updateStock(stockId: string, quantity: number): Promise<void>;
}
