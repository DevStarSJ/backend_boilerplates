import { Controller, Get } from '@nestjs/common'
import BookService from '../services/bookService'

@Controller()
export default class BookController {

  constructor(
    private bookService: BookService
  ) {}

  @Get('books/count')
  async count() {
    return { count: await this.bookService.bookCount() }
  }
}
