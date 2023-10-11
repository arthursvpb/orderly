/* eslint-disable max-classes-per-file */
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { Module, Controller, Get } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
