import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { ItemService } from '../../services/itemService'
// import { ItemDto } from 'src/dtos/itemDto'
import { Item } from 'src/models/item'
import { ItemInput } from 'src/inputs/itemInput'
import { SuccessType } from 'src/types/SuccessType'


@Resolver('Item')
export class ItemResolver {
  constructor(
    private readonly itemService: ItemService,
  ) {}

  @Query(() => [ Item ])
  async items(@Args('id', {nullable: true}) id?: number) {
    if (id) return await Item.find({ where: { id }, relations: ['user']})
    return await Item.find({relations: ['user']})
  }

  @Mutation(() => Item)
  async createItem(@Args('item') params: ItemInput) {
    return await this.itemService.create(params)
  }

  @Mutation(() => Item)
  async updateItem(@Args('item') params: ItemInput) {
    return await this.itemService.update(params)
  }

  @Mutation(() => SuccessType)
  async removeItem(@Args('id') id: number) {
    return await this.itemService.remove(id)
  }
}
