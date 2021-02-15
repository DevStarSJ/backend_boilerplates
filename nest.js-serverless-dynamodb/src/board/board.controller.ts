import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post(':id')
  update(
    @Param() param,
    @Body('category') category: string,
    @Body('board') board: BoardInput) {
    const key = {
      id: param.id,
      category: category,
    }
    console.log(key)
    return this.boardService.update(key, board)
  }
}
