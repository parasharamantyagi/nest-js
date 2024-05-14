import { Injectable } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { Article } from './graphDto';


@Resolver()
@Injectable()
export class AppService {

  @Query(returns => String) // <-- Specify return type
  getHello(): string {
    return 'Hello World!';
  }

  @Query(returns => Article) // <-- Use the GraphQL type Article as the return type
  getStaticObject(): Article { // <-- Method to return static object
    return {
      id: 2,
      title: 'Static Object',
      description: 'This is a static object returned from GraphQL query.',
    };
  }
}