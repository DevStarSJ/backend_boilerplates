import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { UserService } from '../../services/userService'
import { User } from '../../models/user'
// import { UserDto } from '../../dtos/userDto'
import { SignUpType } from '../../types/signUpType'
import { SignInInput } from '../../inputs/signInInput'


@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(() => [ User ])
  async users() {
    return await User.find({relations: ['items']})
  }

  @Mutation(() => SignUpType)
  async signUp(@Args('data') data: SignInInput) {
    return await this.userService.signUp(data.username, data.password)
  }
}
