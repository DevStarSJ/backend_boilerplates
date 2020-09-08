import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'], 
      synchronize: true,
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
