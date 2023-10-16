import { Client } from '@/domain/entities/Client';
import { IClientRepository } from '@/domain/repositories/client-repository.interface';
import { PrismaClient } from '@prisma/client';

export class PrismaClientRepository implements IClientRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(client: Client): Promise<Client> {
    const savedClient = await this.prisma.client.upsert({
      where: { id: client.id },
      create: client,
      update: client,
    });

    return new Client(savedClient);
  }

  async findByCpf(cpf: string): Promise<Client | null> {
    const foundClient = await this.prisma.client.findUnique({ where: { cpf } });

    if (!foundClient) return null;

    return new Client(foundClient);
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.prisma.client.findMany();
    return clients.map(client => new Client(client));
  }
}
