export enum PaymentStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
}

export class Payment {
  constructor(
    public id: string,
    public orderId: string,
    public qrCode: string,
    public status: PaymentStatus,
  ) {}
}
