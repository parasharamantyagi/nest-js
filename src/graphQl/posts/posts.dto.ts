import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // <-- Decorate with @ObjectType to define a GraphQL type
export class Post {
  @Field(type => Int)
  id: string;

  @Field() // <-- Decorate each field with @Field to expose them in the GraphQL schema
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: string;
}