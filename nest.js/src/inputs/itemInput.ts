import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class ItemInput {
  @Field(() => Int, { nullable: true })
  readonly id?: number

  @Field({ nullable: true })
  readonly name?: string

  @Field(() => Int, { nullable: true })
  readonly price?: number

  @Field(() => Int, { nullable: true })
  readonly userId?: number
}
