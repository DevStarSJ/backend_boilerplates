import { ObjectType, Field } from '@nestjs/graphql'
import { Item } from '../models/item'

@ObjectType()
export class UserType {

  @Field()
  readonly id?: number

  @Field()
  email!: string

  @Field(() => [Item], { nullable: true })
  items?: Item[]

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
