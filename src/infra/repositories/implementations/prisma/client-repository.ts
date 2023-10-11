import { Client } from '@/domain/entities/Client';
import { IClientRepository } from '@/domain/repositories/client-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaClientRepository implements IClientRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  save(client: Client): Promise<Client> {
    throw new Error('Method not implemented.');
  }
  findByCpf(cpf: string): Promise<Client | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Client[]> {
    throw new Error('Method not implemented.');
  }
}
