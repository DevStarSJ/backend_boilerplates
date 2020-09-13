import { ObjectType, Field } from '@nestjs/graphql'
import { UserDto } from './userDto'

@ObjectType()
export class SignUpDto {

  @Field()
  readonly success!: boolean

  @Field()
  readonly user: UserDto
}
