import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

//isso é um decorator ("decorador"), que acopla um funcionamento dentro de uma outra classe, variável, etc
//@Module é o decorator (usa-se o "@" para definir um decorator), e dentro dele passo suas especificações
@Module({
  imports: [],
  controllers: [AppController], //'controller' são os arquivos que são pontos de entrada na aplicação, arquivos que lidam com o recebimento/entrada de HTTP Requests
  providers: [PrismaService],
})
export class AppModule { }
