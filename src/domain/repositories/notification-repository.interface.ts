export interface INotificationRepository {
  save(notification: Notification): Promise<void>;
  findByUserId(userId: string): Promise<Notification[]>;
  findByOrderId(orderId: string): Promise<Notification[]>;
  remove(notificationId: string): Promise<void>;
}
