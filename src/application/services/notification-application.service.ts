import { INotificationRepository } from '@/domain/repositories/notification-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationApplicationService {
  constructor(
    private readonly notificationRepository: INotificationRepository,
  ) {}

  // Methods to handle Notification-specific operations
}
