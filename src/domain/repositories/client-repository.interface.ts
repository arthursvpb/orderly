export interface IClientRepository {
  save(client: Client): Promise<Client>;
  findByCpf(cpf: string): Promise<Client | null>;
  findAll(): Promise<Client[]>;
}
