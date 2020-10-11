import { Injectable } from '@nestjs/common'
import { Item } from '../models/item'
import { ItemInput } from 'src/inputs/itemInput'
import { getManager } from 'typeorm'

@Injectable()
export default class ItemService {
  async create(params: ItemInput) {
    const item = new Item(params)
    await item.save()
    return item
  }

  async update(params: ItemInput) {
    const item = await Item.findOne(params.id)
    getManager().merge(Item, item, params)
    await item.save()
    return item
  }

  async remove(id: number) {
    const item = await Item.findOne(id)
    await item.remove()
    return { success: true }
  }
}
