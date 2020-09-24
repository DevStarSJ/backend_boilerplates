
import { Field, InputType } from '@nestjs/graphql'
import AuthorInput from './authorInput'

@InputType()
class BookAuthorConnectInput {
  @Field()
  readonly id: number;
}

@InputType()
class BookAuthorInput {
  @Field({nullable: true})
  readonly connect: BookAuthorConnectInput;

  @Field({nullable: true})
  readonly create: AuthorInput;
}

@InputType()
class BookInput {
  @Field()
  readonly title: string;

  @Field()
  readonly authorId?: number;
}

export default BookInput