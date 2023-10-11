export class Notification {
  constructor(
    public id: string,
    public content: string,
    public sentAt: Date,
    public clientId: string,
  ) {}
}
