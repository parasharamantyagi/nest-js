import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}