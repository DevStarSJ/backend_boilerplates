import { Field, InputType } from '@nestjs/graphql'

@InputType()
export default class AuthorInput {
  @Field()
  readonly name: string;
}
