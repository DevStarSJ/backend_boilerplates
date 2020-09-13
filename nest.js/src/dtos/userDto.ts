import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class UserDto {

  @Field()
  readonly id?: number

  @Field()
  username!: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
