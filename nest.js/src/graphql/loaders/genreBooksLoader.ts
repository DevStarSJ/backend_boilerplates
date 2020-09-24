import { In } from 'typeorm'
import Genre from '../../models/genre'
import DataLoader from 'dataloader'

const batchBooks = async (genreIds: string[]) => {
  const genres = await Genre.find({ where: { id: In(genreIds) }, relations: ['books']})
  return genres.flatMap(genre => genre.books)
}

const genreBooksLoader = () => new DataLoader(batchBooks)
export default genreBooksLoader
