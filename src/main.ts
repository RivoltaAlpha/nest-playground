import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // detects DTO's and validates them globally
  app.useGlobalPipes(new ValidationPipe());
  
  const configService = app.get(ConfigService);
  const PORT = configService.getOrThrow<number>('PORT');
  await app.listen(PORT,() => {
    console.log(`Application is running on port: ${PORT}`);
  });
}
bootstrap();
