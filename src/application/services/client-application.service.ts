import { IClientRepository } from '@/domain/repositories/client-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientApplicationService {
  constructor(private readonly clientRepository: IClientRepository) {}

  // Add methods to handle Client-specific operations
}
