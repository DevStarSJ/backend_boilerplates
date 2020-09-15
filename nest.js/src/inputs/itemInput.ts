import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class ItemInInput {
  @Field()
  readonly id?: number

  @Field()
  readonly name!: string

  @Field()
  readonly price!: number

  @Field({ name: 'user_id' })
  readonly userId: number
}
