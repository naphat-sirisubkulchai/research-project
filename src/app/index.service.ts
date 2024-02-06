import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  getHello(): string {
    console.log("print hello world")
    return 'Hello World!';
  }
  test(): string {
    return 'a';
  }
}
