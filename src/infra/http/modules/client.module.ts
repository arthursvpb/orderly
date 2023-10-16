import { ClientApplicationService } from '@/application/services/client-application.service';
import { ClientController } from '@/infra/http/controllers/client.controller';
import { PrismaClientRepository } from '@/infra/repositories/implementations/prisma/client-repository';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ClientController],
  providers: [
    ClientApplicationService,
    {
      provide: 'IClientRepository',
      useClass: PrismaClientRepository,
    },
  ],
})
export class ClientModule {}
