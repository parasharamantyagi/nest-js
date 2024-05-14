import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Article } from './../graphDto';


@Resolver()
@Injectable()
export class UserService {

  @Query(returns => [Article]) // <-- Use the GraphQL type Article as the return type
  userList(): [Article] { // <-- Method to return static object
    return [{
      id: 2,
      title: 'Static Object',
      description: 'This is a static object returned from GraphQL query.',
    }];
  }


  @Mutation(returns => String)
  async setUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return 'okkkkkkkkkkkk';
  }
}