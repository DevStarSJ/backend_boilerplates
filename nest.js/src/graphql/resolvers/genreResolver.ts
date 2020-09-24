import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import Author from '../../models/author'
import Book from '../../models/book'
import BookInput from '../../inputs/bookInput'
import Genre from '../../models/genre'
import GenreInput from '../../inputs/genreInput'
// import BookGenre from '../../models/bookGenre'

@Resolver(() => Genre)
export default class GenreResolver {
  @Query(() => [Genre])
  public async genres() {
    return await Genre.find()
  }
  @Query(() => Genre, {nullable: true})
  public async genre(@Args('id') id: number) {
    return await Genre.findOne(id)
  }

  @Mutation(() => Genre)
  public async createGenre(@Args('data') input: GenreInput) {
    const genre = new Genre()
    genre.name = input.name
    await genre.save()
    return genre
  }

  // @ResolveField()
  // public async books(@Parent() parent) {
  //   // const bookGenres = await BookGenre.find({where: {genreId: parent.id}, relations: ['book']})
  //   // const books: Book[] = []
  //   // bookGenres.forEach(async bookGenre => books.concat(await bookGenre.books))
  //   return await parent.books
  // }
}
