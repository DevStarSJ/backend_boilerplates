import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Post(':category/:id')
  update(
    @Param('id') id: string,
    @Param('category') category: string,
    @Body() board: BoardInput) {
    const key = { id, category }
    return this.boardService.update(key, board)
  }

  @Delete(':category/:id')
  delete(
    @Param('id') id: string,
    @Param('category') category: string) {
    const key = { id, category }
    return this.boardService.delete(key)
  }
}
