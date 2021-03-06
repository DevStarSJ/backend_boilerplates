import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import JwtAuthGuard from 'src/auth/jwt.auth.guard';
import { BoardInput } from './board.interface';
import { BoardService } from './board.service';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get(':category')
  findCategory(@Param('category') category: string) {
    return this.boardService.find(category)
  }

  @Get()
  findAll() {
    return this.boardService.findAll()
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() board: BoardInput,
    @UploadedFile() file: any,
  ) {
    return this.boardService.create(file.buffer, board)
  }

  @Post(':category/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Param('id') id: string,
    @Param('category') category: string,
    @Body() board: BoardInput,
    @UploadedFile() file: any,) {
    const key = { id, category }
    return this.boardService.update(key, file.buffer, board)
  }

  @Delete(':category/:id')
  @UseGuards(JwtAuthGuard)
  delete(
    @Param('id') id: string,
    @Param('category') category: string) {
    const key = { id, category }
    return this.boardService.delete(key)
  }
}
