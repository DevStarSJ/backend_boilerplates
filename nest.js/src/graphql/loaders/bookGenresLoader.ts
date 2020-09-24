import { In } from 'typeorm'
import DataLoader from 'dataloader'
import Book from '../../models/book'

const batchGenres = async (bookIds: string[]) => {
  const books = await Book.find({ where: { id: In(bookIds) }, relations: ['genres']})
  return books.flatMap(book => book.genres)
}

const bookGenresLoader = () => new DataLoader(batchGenres)
export default bookGenresLoader
