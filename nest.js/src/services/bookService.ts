import { Injectable } from '@nestjs/common'
import Author from 'src/models/author'
import Genre from 'src/models/genre'
import Book from '../models/book'

@Injectable()
export class BookService {

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
    await genre.save()
    console.log('book1.id, book2.id, genre.id => ', book1.id, book2.id, genre.id)

    await (async () => { 
      // Do something before delay
      console.log('before delay')

      function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms))
      }

      await delay(1000)

      // Do something after
      console.log('after delay')
    })()
    
    genre.books = Promise.resolve([book1, book2])
    // ;(await genre.books).push(book1)
    await genre.save()

    // genre.books = []
    // genre.books.push(book1)
    // genre.books.push(book2)
    // book1.genres = [genre]
    // book2.genres = [genre]
    // await book1.save()
    // await book2.save()
    // console.log( genre.books)
    // ;(await genre.books).push(book1)
    // ;(await genre.books).push(book2)
    // await genre.save()

    return await Book.count()
  }
}