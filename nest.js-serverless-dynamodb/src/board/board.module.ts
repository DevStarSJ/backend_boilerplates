import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { BoardController } from './board.controller';
import { BoardSchema } from './board.schema';
import { BoardService } from './board.service';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  providers: [
    BoardService,
  ],
  controllers: [ BoardController ]
})
export class BoardModule {}