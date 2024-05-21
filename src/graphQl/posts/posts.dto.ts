import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity("posts")
@ObjectType() // <-- Decorate with @ObjectType to define a GraphQL type
export class Post {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number; // <-- Changed type from string to number

  @Column()
  @Field() // <-- Decorate each field with @Field to expose them in the GraphQL schema
  title: string;

  @Column()
  @Field()
  description: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  @Field()
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  @Field()
  updated_at: Date;
}
