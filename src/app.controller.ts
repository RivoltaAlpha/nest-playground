import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // This is the root endpoint or https://localhost:3000/ method
  getHello(): string {
    return this.appService.getHello();
  }
}
