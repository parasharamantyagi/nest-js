import { Injectable } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
@Injectable()
export class AppService {

  @Query(returns => String) // <-- Specify return type
  getHello(): string {
    return 'Hello World!';
  }
}
