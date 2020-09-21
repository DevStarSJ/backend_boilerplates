import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column, OneToMany,
  JoinColumn,
  ManyToOne, BaseEntity
} from 'typeorm'
import { BookGenre } from './bookGenre'
import { Author } from './author'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity({name: 'books'})
export class Book extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({name: 'author_id'})
  authorId: number;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @Field(() => Author)
  author: Author;

  // Associations

  @ManyToOne(() => Author, author => author.bookConnection, {primary: true})
  @JoinColumn({name: 'author_id'})
  authorConnection: Promise<Author>;

  @OneToMany(() => BookGenre, bookGenre => bookGenre.genre)
  genreConnection: Promise<BookGenre[]>;
}