import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class SuccessType {

  @Field()
  readonly success!: boolean
}
