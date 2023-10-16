import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Orderly API')
      .setDescription('')
      .setVersion('1.0.0')
      .build(),
  );

  SwaggerModule.setup('api', app, document);
};
