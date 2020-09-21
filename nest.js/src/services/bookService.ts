import { Injectable } from '@nestjs/common'
import { Book } from '../models/book'

@Injectable()
export class BookService {

  async bookCount(): Promise<number> {
    return await Book.count()
  }
}