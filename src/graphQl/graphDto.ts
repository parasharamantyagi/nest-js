import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType() // <-- Decorate with @ObjectType to define a GraphQL type
export class Article {
  @Field() // <-- Decorate each field with @Field to expose them in the GraphQL schema
  title: string;

  @Field()
  description: string;
}