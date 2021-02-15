import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Board, BoardInput, BoardKey } from './board.interface';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel('Board')
    private boardModel: Model<Board, BoardKey>,
  ) {}

  create(board: BoardInput) {
    const now = new Date().toISOString()
    const params = {
      id: Math.floor(+new Date() / 1000).toString(),
      createdAt: now,
      updatedAt: now,
      valid: 'true',
      ...board,
    }
    return this.boardModel.create(params)
  }

  update(key: BoardKey, board: BoardInput) {
    const now = new Date().toISOString()
    const params = {
      updatedAt: now,
      ...board,
    }
    return this.boardModel.update(key, params)
  }

  findOne(key: BoardKey) {
    return this.boardModel.get(key);
  }

  findAll() {
    return this.boardModel.scan().exec();
  }
}