import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  age: number;
  description: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  getHello(): string {
    return 'Hello World UsersService!';
  }

  findAll(): User[] {
    return [
      {
        name: 'abc',
        age: 12,
        description: 'okkkk'
      }
    ];
  }
}
