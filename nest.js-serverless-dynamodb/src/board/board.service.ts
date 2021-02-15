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
    console.log(board)
    const now = new Date().toISOString()
    const params = {
      id: Math.floor(+new Date() / 1000).toString(),
      createdAt: now,
      updatedAt: now,
      valid: 'true',
      ...board,
    }
    console.log(params)
    return this.boardModel.create(params)
  }

  update(key: BoardKey, board: Partial<Board>) {
    return this.boardModel.update(key, board);
  }

  findOne(key: BoardKey) {
    return this.boardModel.get(key);
  }

  findAll() {
    return this.boardModel.scan().exec();
  }
}