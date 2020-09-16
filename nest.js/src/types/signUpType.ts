import { ObjectType, Field } from '@nestjs/graphql'
import { UserType } from './userType'

@ObjectType()
export class SignUpType {

  @Field()
  readonly success!: boolean

  @Field()
  readonly user: UserType
}
