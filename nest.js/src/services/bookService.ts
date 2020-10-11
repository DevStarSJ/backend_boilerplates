import { Injectable } from '@nestjs/common'
import Author from 'src/models/author'
import Genre from 'src/models/genre'
import Book from '../models/book'

@Injectable()
export default class BookService {

  async bookCount(): Promise<number> {
    const author = new Author()
    author.name = 'JADE'
    await author.save()
    const book1 = new Book()
    book1.title = 'BOOK1'
    book1.author = Promise.resolve(author)
    await book1.save()
    const book2 = new Book()
    book2.title = 'BOOK2'
    book2.author = Promise.resolve(author)
    await book2.save()

    const genre = new Genre()
    genre.name = 'COMIC'
    genre.books = Promise.resolve([book1, book2])
    await genre.save()

    return await Book.count()
  }
}