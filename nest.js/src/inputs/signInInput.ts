import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class SignInInput {
  @Field()
  readonly username!: string

  @Field()
  readonly password!: string
}
