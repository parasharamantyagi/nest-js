import { Injectable } from '@nestjs/common';
import { Post } from './posts.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) { }

  private posts: Post[] = [
    { id: 1, title: 'First Post', description: 'Content of the first post', created_at: new Date(), updated_at: new Date() },
    { id: 2, title: 'Second Post', description: 'Content of the second post', created_at: new Date(), updated_at: new Date() },
    // Other posts...
  ];

  async findAll(): Promise<Post[]> {
    // In a real application, this method might interact with a database to fetch all posts
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post | undefined> {
    return this.postRepository.findOne({ where: { id } });
  }

  async findById(id: string): Promise<Post | undefined> {
    return { id: 1, title: 'First Post', description: 'Content of the first post', created_at: new Date(), updated_at: new Date() }
    // this.posts.find(post => post.id === id);
  }

  // Other methods like create, update, delete, etc. would be defined here
}