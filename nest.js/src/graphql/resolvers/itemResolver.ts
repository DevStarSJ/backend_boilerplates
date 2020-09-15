import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { ItemService } from '../../services/itemService'
import { ItemDto } from 'src/dtos/itemDto'
import { Item } from 'src/models/item'
import { ItemInput } from 'src/inputs/itemInput'


@Resolver('Item')
export class ItemResolver {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  @Query(() => [ ItemDto ])
  async items() {
    return await Item.find({relations: ['user']})
  }

  @Mutation(() => ItemDto)
  async createItem(@Args('item') params: ItemInput) {
    return await this.itemService.create(params)
  }
}
