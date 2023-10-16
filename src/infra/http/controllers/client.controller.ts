import { ClientApplicationService } from '@/application/services/client-application.service';
import { Controller, Post, Get, Body, Param } from '@nestjs/common';

type CreateClientDto = { cpf?: string };

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientApplicationService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.getAllClients();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.clientService.getClientByCpf(cpf);
  }
}
