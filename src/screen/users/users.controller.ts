import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) { }

  @Get()
  async getUser(@Res() res: Response): Promise<any> {
    let post = await this.appService.findOne('okk');
    return res.status(HttpStatus.OK).json(post);
  }

  @Get('/one')
  async findAll(@Req() request: Request, @Res() res: Response): Promise<any> {
    let allusers = await this.appService.findAll();
    let results = { status: request.query.check ? request.query.check : 1, data: allusers };
    return res.status(HttpStatus.OK).json(results);
  }
}
