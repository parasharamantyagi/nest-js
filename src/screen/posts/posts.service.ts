import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { Repository } from 'typeorm';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) { }

  async findAll() {
    return await this.postRepository.find({
      select: {
        id: true,
        title: true,
        description: true,
        user: {
          id: true,
          name: true
        }
      },
      // where: { id: 1 },
      relations: ['user']
      // relations: ['name'],
    });
  }
}
