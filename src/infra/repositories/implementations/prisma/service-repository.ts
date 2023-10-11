import { Service } from '@/domain/entities/Service';
import { IServiceRepository } from '@/domain/repositories/service-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaServiceRepository implements IServiceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(service: Service): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(serviceId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(serviceId: string): Promise<Service | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Service[]> {
    throw new Error('Method not implemented.');
  }
}
