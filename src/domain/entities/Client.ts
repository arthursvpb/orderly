export class Client {
  id?: string;
  cpf?: string;

  constructor(data: Client) {
    this.id = data.id;
    this.cpf = data.cpf;
  }
}
