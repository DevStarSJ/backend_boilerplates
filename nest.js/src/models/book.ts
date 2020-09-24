import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column, 
  JoinColumn,
  ManyToOne, BaseEntity, ManyToMany, JoinTable
} from 'typeorm'
import Author from './author'
import { Field, ObjectType } from '@nestjs/graphql'
import Genre from './genre'

@ObjectType()
@Entity({name: 'books'})
export default class Book extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({name: 'author_id'})
  authorId: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @Field(() => Author, { nullable: true })
  @ManyToOne(() => Author, author => author.books, {primary: true})
  @JoinColumn({name: 'author_id'})
  author: Promise<Author>;

  @ManyToMany(() => Genre, genre => genre.books, {primary: true})
  @JoinTable({
    name: 'books_genres',
    joinColumn: { name: 'book_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'genre_id', referencedColumnName: 'id' },
  })
  genres: Promise<Genre[]>
}