import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//cria a aplicação que está ouvindo dentro da porta '3000'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
