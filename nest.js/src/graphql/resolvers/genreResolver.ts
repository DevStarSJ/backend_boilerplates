import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import Book from '../../models/book'
import Genre from '../../models/genre'
import GenreInput from '../../inputs/genreInput'
import { IGraphQLContext } from '../context'

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

  @ResolveField(() => [Book])
  public async books(@Parent() parent, @Context() { genreBooksLoader }: IGraphQLContext) {
    // return await parent.books
    return await genreBooksLoader.load(parent.id)
  }
}
