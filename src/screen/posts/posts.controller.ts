import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) { }

  @Get()
  async getPost(): Promise<any> {
    let allusers = await this.appService.findAll();
    return allusers;
  }
}
