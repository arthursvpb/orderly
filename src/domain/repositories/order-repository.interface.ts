export interface IOrderRepository {
  save(order: Order): Promise<Order>;
  findById(id: string): Promise<Order | null>;
  findAll(): Promise<Order[]>;
}
