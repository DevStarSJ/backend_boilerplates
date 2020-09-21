import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql'
import { UserService } from '../../services/userService'
import { User } from '../../models/user'
import { SignUpType } from '../../types/signUpType'
import { SignInInput } from '../../inputs/signInInput'
import { Item } from '../../models/item'


@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(() => [ User ])
  async users() {
    const users = await User.find() //({relations: ['items']})
    return await User.find() //({relations: ['items']})
  }

  @Mutation(() => SignUpType)
  async signUp(@Args('data') data: SignInInput) {
    return await this.userService.signUp(data.username, data.password)
  }

  @ResolveField()
  async items(@Parent() parent) {
    const items = await Item.find({ where: {userId: parent.id}})//, relations:['user']})
    return items
  }
}
