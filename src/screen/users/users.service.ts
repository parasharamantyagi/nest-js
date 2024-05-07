import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

// interface User {
//   name: string;
//   description: string;
// }

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  private readonly users: User[] = [];

  async findAll(): Promise<User[]> {
    let result = await this.usersRepository.find({ select: { id: true, name: true, posts: { id: true, title: true } }, relations: ['posts'] });
    return result;
  }
}
