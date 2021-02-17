import { Module } from '@nestjs/common'
import { DynamooseModule } from 'nestjs-dynamoose'
import AuthModule from './auth/auth.module'
import { BoardModule } from './board/board.module'

@Module({
  imports: [
    DynamooseModule.forRoot({
      aws: { 
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.REGION,
      },
      model: {
        create: false,
        // prefix: `${process.env.SERVICE}-${process.env.STAGE}-`,
        suffix: '-table',
      },
    }),
    BoardModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
