import { Controller, Get, HttpStatus, InternalServerErrorException, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) { }

  @Get()
  async getUser(@Res() res: Response): Promise<any> {
    try {
      let post = await this.appService.findOne('okk123');
      return res.status(HttpStatus.OK).json(post.id);
    } catch (error) {
      throw new InternalServerErrorException('Something bad happened', { cause: new Error(), description: 'Some error description' });
    }
  }

  @Get('/one')
  async findAll(@Req() request: Request, @Res() res: Response): Promise<any> {
    let allusers = await this.appService.findAll();
    let results = { status: request.query.check ? request.query.check : 1, data: allusers };
    return res.status(HttpStatus.OK).json(results);
  }
}
