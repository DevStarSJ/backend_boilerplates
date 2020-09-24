// import {
//   Entity,
//   PrimaryColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   BaseEntity, ManyToOne, JoinColumn
// } from 'typeorm'
// import Book from './book'
// import Genre from './genre'

// @Entity('books_genres')
// export default class BookGenre extends BaseEntity {
//   @PrimaryColumn({name: 'book_id'})
//   // @ManyToOne(() => Book, book => book.genres)
//   bookId: number;

//   @PrimaryColumn({name: 'genre_id'})
//   genreId: number;

//   @CreateDateColumn({name: 'created_at'})
//   createdAt: Date;

//   @UpdateDateColumn({name: 'updated_at'})
//   updatedAt: Date;

//   // @Field(() => Book, { nullable: true })
//   @ManyToOne(() => Book, book => book.genres, {primary: true})
//   @JoinColumn({name: 'book_id'})
//   books: Book[]

//   // @Field(() => Genre, { nullable: true })
//   @ManyToOne(() => Genre,  genre => genre.books, {primary: true})
//   @JoinColumn({name: 'genre_id'})
//   genres: Genre[]
// }
