
import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable
} from 'typeorm'
import Book from './book'
// import BookGenre from './bookGenre'

@ObjectType()
@Entity('genres')
export default class Genre extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({name: 'genre_name'})
  name: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  // @Field(() => Book, { nullable: true })
  // @OneToMany(() => BookGenre, bookGenre => bookGenre.books)
  // books: Promise<Book[]>;
  @ManyToMany(() => Book, book => book.genres, {primary: true})
  // @JoinTable()
  @JoinTable({
    name: 'books_genres',
    joinColumn: { name: 'genre_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'book_id', referencedColumnName: 'id' },
  })
  books: Promise<Book[]>
}
