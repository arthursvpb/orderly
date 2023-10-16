import { Client } from '@/domain/entities/Client';
import { IClientRepository } from '@/domain/repositories/client-repository.interface';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ClientApplicationService {
  constructor(
    @Inject('IClientRepository')
    private readonly clientRepository: IClientRepository,
  ) {}

  async createClient(clientData: Client): Promise<Client> {
    const client = new Client(clientData);
    return this.clientRepository.save(client);
  }

  async getClientByCpf(cpf: string): Promise<Client | null> {
    return this.clientRepository.findByCpf(cpf);
  }

  async getAllClients(): Promise<Client[]> {
    return this.clientRepository.findAll();
  }
}
