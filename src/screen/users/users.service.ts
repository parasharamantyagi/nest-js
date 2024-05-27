import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { In, Repository } from 'typeorm';

// interface User {
//   name: string;
//   description: string;
// }

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  private readonly users: User[] = [];

  async findAll(): Promise<User[]> {
    
    return await this.usersRepository.find({ where: { id: In([1]) }, select: { id: true, name: true, posts: { id: true, title: true, description: true, created_at: true } }, relations: ['posts'] });
  }

  async findOne(name: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { name: name } });
  }
}
