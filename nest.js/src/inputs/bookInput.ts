import { Field, InputType } from '@nestjs/graphql'

@InputType()
export default class BookInput {
  @Field()
  readonly title: string;

  @Field()
  readonly authorId?: number;
}
