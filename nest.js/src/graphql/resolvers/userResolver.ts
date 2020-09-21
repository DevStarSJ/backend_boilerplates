import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql'
import { UserService } from '../../services/userService'
import { User } from '../../models/user'
// import { UserDto } from '../../dtos/userDto'
import { SignUpType } from '../../types/signUpType'
import { SignInInput } from '../../inputs/signInInput'
import { Item } from '../../models/item'


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

  // @ResolveField()
  // public async item(@Parent() parent): Promise<Item[]> {
  //   const items = await Item.find({ where: {userId: parent.id}, relations:['user']})
  //   return items
  // }
}
