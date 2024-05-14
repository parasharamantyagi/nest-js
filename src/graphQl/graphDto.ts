import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // <-- Decorate with @ObjectType to define a GraphQL type
export class Article {
  @Field(type => Int)
  id: number;

  @Field() // <-- Decorate each field with @Field to expose them in the GraphQL schema
  title: string;

  @Field()
  description: string;
}