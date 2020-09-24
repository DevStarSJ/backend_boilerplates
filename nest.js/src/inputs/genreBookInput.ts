import { Field, InputType } from '@nestjs/graphql'

@InputType()
export default class GenreBookInput {
  @Field()
  readonly genreId: number
  @Field()
  readonly bookId: number
}
