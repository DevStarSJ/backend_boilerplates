import { Injectable } from '@nestjs/common'
import { Item } from '../models/item'
import * as L from 'lodash'
import { ItemInput } from 'src/inputs/itemInput'

@Injectable()
export class ItemService {
  async create(params: ItemInput) {
    const item = new Item(params)
    await item.save()
    return item
  }
}
