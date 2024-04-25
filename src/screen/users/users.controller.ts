import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) { }

  @Get()
  getHello(@Res() res: Response) {
    return res.status(HttpStatus.OK).json("This is users body");
  }

  @Get('/one')
  async findAll(@Req() request: Request, @Res() res: Response): Promise<any> {
    let results = { status: request.query.check ? request.query.check : 1, data: this.appService.findAll() };
    return res.status(HttpStatus.OK).json(results);
  }
}
