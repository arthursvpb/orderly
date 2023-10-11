import { IAdminRepository } from '@/domain/repositories/admin-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminApplicationService {
  constructor(private readonly adminRepository: IAdminRepository) {}

  // Add methods to handle Admin-specific operations
}
