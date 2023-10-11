import { Admin } from '@/domain/entities/Admin';

export interface IAdminRepository {
  save(admin: Admin): Promise<void>;
  findByUsername(username: string): Promise<Admin | null>;
  findById(adminId: string): Promise<Admin | null>;
  remove(adminId: string): Promise<void>;
}
