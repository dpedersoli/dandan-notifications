import { Injectable } from '@nestjs/common';

//Services são classes sem um propósito necessariamente esecífico, podem ser qualquer coisa dentro do Nest
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
