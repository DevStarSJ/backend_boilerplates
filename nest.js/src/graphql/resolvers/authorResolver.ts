import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import AuthorInput from '../../inputs/authorInput'
import Author from '../../models/author'

@Resolver(Author)
export class AuthorResolver {
  @Query(() => [Author])
  async authors() {
    return await Author.find()
  }
  @Query(() => Author, {nullable: true})
  async author(@Args('id') id: number) {
    return await Author.findOne(id)
  }

  @Mutation(() => Author)
  async createAuthor(@Args('data') input: AuthorInput) {
    const author = new Author()
    author.name = input.name
    return await author.save()
  }
}