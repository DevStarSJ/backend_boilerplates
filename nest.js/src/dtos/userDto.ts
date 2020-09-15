import { ObjectType, Field } from '@nestjs/graphql'
import { ItemDto } from './itemDto'

@ObjectType()
export class UserDto {

  @Field()
  readonly id?: number

  @Field()
  username!: string

  @Field(type => [ItemDto], { nullable: true })
  items?: ItemDto[]

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
