import { IServiceRepository } from '@/domain/repositories/service-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceApplicationService {
  constructor(private readonly serviceRepository: IServiceRepository) {}

  // Add methods to handle Service-specific operations
}
