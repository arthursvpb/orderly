import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { initSwagger } from '../../docs';
import { AppModule } from './http/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = app.get(ConfigService);
  const PORT = config.get('SERVER_PORT');

  initSwagger(app);

  return app.listen(PORT || 8080);
};

bootstrap();
