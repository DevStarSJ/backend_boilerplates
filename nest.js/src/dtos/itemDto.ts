import { ObjectType, Field } from '@nestjs/graphql'
import { UserDto } from './userDto'

@ObjectType()
export class ItemDto {

  @Field()
  readonly id?: number

  @Field()
  name: string

  @Field()
  price: number

  // @Field()
  // userId?: number

  @Field(type => UserDto, { nullable: true })
  user?: UserDto

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
