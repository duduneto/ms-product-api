import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      url: ['amqp://localhost:5672'],
      queue: 'admin-backend',
    },
  });
  await app.listen();
}
bootstrap();
