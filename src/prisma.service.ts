import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit { //exportando uma classe 'PrismaService' que ela extende o 'PrismaClient' (que traz os métodos necessários para criar, atualizar, ou qualquer operação no DB, e também implementa uma interface, do Nest, que é o 'onModuleInit' -> que me da a capacidade de criar um novo método chamado 'enableShutdownHooks' que me permite executar algo assim que a aplicação rodar/subir/estiver em produção)
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
