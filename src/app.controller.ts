import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, Simpson } from './app.service';
import { CreateSimpsonDto } from './create-simpson.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  GetSimpsonList(): Simpson[] {
    return this.appService.getSimpsonList();
  }

  @Post()
  addSimpson(@Body() simpson: CreateSimpsonDto): Simpson[] {
    return this.appService.addSimpson(simpson);
  }
}
