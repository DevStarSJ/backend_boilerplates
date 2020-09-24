import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import Book from '../../models/book'
import BookInput from '../../inputs/bookInput'
import Genre from '../../models/genre'
import { IGraphQLContext } from '../context'
import Author from 'src/models/author'

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
  
  @ResolveField(() => [Genre])
  public async genres(@Parent() parent, @Context() { bookGenresLoader }: IGraphQLContext) {
    // return await parent.genres
    return bookGenresLoader.load(parent.id)
  }

  @ResolveField(() => Author, { nullable: true })
  async author(@Parent() parent, @Context() { bookAuthorLoader }: IGraphQLContext) {
    return bookAuthorLoader.load(parent.id)
  }
}
