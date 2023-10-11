export interface IServiceRepository {
  save(service: Service): Promise<void>;
  findById(serviceId: string): Promise<Service | null>;
  findAll(): Promise<Service[]>;
  remove(serviceId: string): Promise<void>;
}
