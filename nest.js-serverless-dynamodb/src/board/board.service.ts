import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Board, BoardInput, BoardKey } from './board.interface';
import { FilesService } from './file.service';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel('Board')
    private boardModel: Model<Board, BoardKey>,
    private readonly fileService: FilesService
  ) {}

  async create(file: Buffer, board: BoardInput) {
    const { filename, category, title } = board

    const url = await this.fileService.uploadPublicFile(file, category, filename)

    const now = new Date().toISOString()
    const params = {
      id: Math.floor(+new Date() / 1000).toString(),
      createdAt: now,
      updatedAt: now,
      valid: 'true',
      category,
      url,
      title,
    }
    return this.boardModel.create(params)
  }

  async update(key: BoardKey, file: Buffer, board: BoardInput) {
    const { filename, title } = board

    const url = await this.fileService.uploadPublicFile(file, key.category, filename)

    const now = new Date().toISOString()
    const params = {
      updatedAt: now,
      url,
      title,
    }
    return this.boardModel.update(key, params)
  }

  findOne(key: BoardKey) {
    return this.boardModel.get(key)
  }

  findAll() {
    return this.boardModel.scan().exec()
  }
  
  delete(key: any) {
    return this.boardModel.delete(key)
  }

  fileUpload(file: Buffer, filename: string) {

  }
}