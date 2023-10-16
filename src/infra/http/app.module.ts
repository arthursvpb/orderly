import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { ClientModule } from './modules/client.module';

@Module({
  controllers: [AppController],
  imports: [ConfigModule.forRoot({ isGlobal: true }), ClientModule],
})
export class AppModule {}
