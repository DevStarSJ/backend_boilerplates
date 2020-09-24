import { Field, InputType } from '@nestjs/graphql'

@InputType()
export default class GenreInput {
  @Field()
  readonly name: string
}
