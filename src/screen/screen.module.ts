import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/posts.entity';
import { LoginController } from './login/login.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  controllers: [LoginController, UsersController, PostsController],
  providers: [UsersService, PostsService],
  exports: [UsersService, PostsService]
})
export class ScreenModule { }
