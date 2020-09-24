import { In } from 'typeorm'
import Book from '../../models/book'
import DataLoader from 'dataloader'

const batchAuthors = async (bookIds: string[]) => {
  const books = await Book.find({ where: {id: In(bookIds) }, relations: ['author']})
  return books.flatMap(book => book.authorId).filter(author => author !== undefined)
}

const bookAuthorLoader = () => new DataLoader(batchAuthors)
export default bookAuthorLoader
