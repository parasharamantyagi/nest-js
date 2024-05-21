import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './posts.service';
import { PostResolver } from './posts.resolvers';
import { Post } from './posts.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostService, PostResolver],
})
export class PostsModule {}