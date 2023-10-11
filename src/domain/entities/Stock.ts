export enum Movement {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export class Stock {
  constructor(
    public id: string,
    public productId: string,
    public count: number,
    public movement: Movement,
  ) {}
}
