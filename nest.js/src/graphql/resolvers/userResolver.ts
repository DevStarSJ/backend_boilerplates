import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { UserService } from '../../services/userService'
import { getManager } from 'typeorm'
import { User } from '../../models/user'
import { UserDto } from '../../dtos/userDto'
import { SignUpDto } from '../../dtos/signUpDto'
import { SignInInput } from '../../inputs/signInInput'


@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(() => [ UserDto ])
  async users() {
    const repositoy = getManager().getRepository(User)
    return await repositoy.find()
  }

  @Mutation(() => SignUpDto)
  async signUp(@Args('data') data: SignInInput) {
    return await this.userService.signUp(data.username, data.password)
  }
}
