import { Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '../auth.guard';

@Controller('login')
@UseGuards(AuthGuard)
export class LoginController {
  constructor(private readonly appService: UsersService) { }

  @Post()
  async loginUser(@Req() req: Request, @Res() res: Response): Promise<any> {
    let input = req.body;
    let user = await this.appService.findOne(input.name);
    return res.status(HttpStatus.OK).json(user);
  }
}
