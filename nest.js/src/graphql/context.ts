import genreBooksLoader from './loaders/genreBooksLoader'
import bookGenresLoader from './loaders/bookGenresLoader'
import bookAuthorLoader from './loaders/bookAuthorLoader'

export interface IGraphQLContext {
  genreBooksLoader?: ReturnType<typeof genreBooksLoader>
  bookGenresLoader?: ReturnType<typeof bookGenresLoader>
  bookAuthorLoader?: ReturnType<typeof bookAuthorLoader>
}

export default {
  genreBooksLoader: genreBooksLoader(),
  bookGenresLoader: bookGenresLoader(),
  bookAuthorLoader: bookAuthorLoader(),
}
