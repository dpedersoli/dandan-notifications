import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') //posso passar rotas aqui também
export class AppController {
  constructor(private readonly appService: AppService) {} //essa 'constructor' recebe um parâmetro 'appService' (que é uma classe, e 'appService' acaba sendo o nome da 'constructor') que é do tipo 'AppService'

  @Get('hello') //posso passar o endereço da rota no parâmetro "('hello')"
  getHello(): string {
    //'getHello é o nome do método (tanto faz o nome do método dado)
    return this.appService.getHello(); //eu acesso a 'constructor' 'appService' e uso a função 'getHello' de dentro dela
  }
}
