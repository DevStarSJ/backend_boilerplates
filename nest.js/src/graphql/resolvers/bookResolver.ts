import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import Author from '../../models/author'
import Book from '../../models/book'
import BookInput from '../../inputs/bookInput'
import Genre from '../../models/genre'
// import BookGenre from '../../models/bookGenre'

@Resolver(() => Book)
export default class BookResolver {
  @Query(() => [Book])
  public async books() {
    return await Book.find()
  }
  @Query(() => Book, {nullable: true})
  public async book(@Args('id') id: number) {
    return await Book.findOne(id)
  }

  @Mutation(() => Book)
  public async createBook(@Args('data') input: BookInput) {
    const book = new Book()
    book.title = input.title
    book.authorId = input.authorId
    await book.save()
    return book
  }

  // @ResolveField()
  // public async books(@Parent() parent) {
  //   // const bookGenres = await BookGenre.find({where: {genreId: parent.id}, relations: ['book']})
  //   // const books: Book[] = []
  //   // bookGenres.forEach(async bookGenre => books.concat(await bookGenre.books))
  //   return await parent.books
  // }
}
