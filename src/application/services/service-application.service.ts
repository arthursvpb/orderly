import { IServiceRepository } from '@/domain/repositories/service-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceApplicationService {
  constructor(private readonly serviceRepository: IServiceRepository) {}

  // Methods to handle Service-specific operations
}
