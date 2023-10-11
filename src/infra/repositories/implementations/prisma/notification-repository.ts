import { Notification } from '@/domain/entities/Notification';
import { INotificationRepository } from '@/domain/repositories/notification-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaNotificationRepository implements INotificationRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(notificationId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByUserId(userId: string): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }
  findByOrderId(orderId: string): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }
}
