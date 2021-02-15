import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardInput } from './board.interface';
import { BoardService } from './board.service';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll()
  }

  @Post()
  create(@Body() board: BoardInput) {
    return this.boardService.create(board)
  }
}
