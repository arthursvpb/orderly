export enum OrderStatus {
  RECEIVED = 'RECEIVED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  FINALIZED = 'FINALIZED',
}

export class Order {
  constructor(
    public id: string,
    public clientId: string,
    public status: OrderStatus,
    public products: string[],
  ) {}
}
