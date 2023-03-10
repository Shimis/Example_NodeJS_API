import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

class Request {
    paramRequest1: String; //Текстовое поле для запроса функции 1

    @IsInt()
    paramRequest2: Number; //Некое число

    constructor(event) {
      this.paramRequest1 = event.param1 as String;
      this.paramRequest2 = event.param2 as Number;
    }
}

class Response {
  @IsEmail()
  paramResponse1: String; //Чей-то Email

  @IsInt()
  paramResponse2: Number; //Некое число

  constructor(json) {
    this.paramResponse1 = json.param1 as String;
    this.paramResponse2 = json.param2 as Number;
  }
}

export {Request, Response};