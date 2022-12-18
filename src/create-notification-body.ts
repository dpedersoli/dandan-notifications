import { IsNotEmpty, isUUID, Length } from "class-validator";

//isso é uma classe
export class CreateNotificationBody {
  @IsNotEmpty() //aqui eu basicamente digo à aplicação que o 'recipientId' NÃO pode estar vazio
  @isUUID() //aqui determina que esse campo precisa ser um 'UUID', nada além
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240) //min de 5 char e máximo de 240
  content: string;

  category: string;

}
