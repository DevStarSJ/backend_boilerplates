import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import AuthModule from '../auth/auth.module';
import { BoardController } from './board.controller';
import { BoardSchema } from './board.schema';
import { BoardService } from './board.service';
import { FilesService } from './file.service';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
    AuthModule,
  ],
  providers: [
    BoardService, FilesService,
  ],
  controllers: [ BoardController ]
})
export class BoardModule {}