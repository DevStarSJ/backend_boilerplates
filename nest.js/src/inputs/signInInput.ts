import { InputType, Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

@InputType()
export class SignInInput {
  @Field()
  @ApiProperty()
  readonly username!: string

  @Field()
  @ApiProperty()
  readonly password!: string
}
