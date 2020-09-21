
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, PrimaryGeneratedColumn, BaseEntity,
} from 'typeorm'
import { BookGenre } from './bookGenre'

@Entity()
export class Genre extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'genre_name'})
  name: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  // Associations
  @OneToMany(() => BookGenre, bookGenre => bookGenre.book)
  bookConnection: Promise<BookGenre[]>;
}