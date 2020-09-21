import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn, PrimaryGeneratedColumn, BaseEntity,
} from 'typeorm'
import { Genre } from './genre'
import { Book } from './book'

@Entity()
export class BookGenre extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({name: 'book_id'})
  bookId: number;

  @PrimaryColumn({name: 'genre_id'})
  genreId: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  // Associations
  @ManyToOne(() => Book, book => book.genreConnection, {primary: true})
  @JoinColumn({name: 'book_id'})
  book: Book[];

  @ManyToOne(() => Genre,  genre => genre.bookConnection, {primary: true})
  @JoinColumn({name: 'genre_id'})
  genre: Genre[];
}