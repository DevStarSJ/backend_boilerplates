import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import controllers from './controllers'
import services from './services'

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
  controllers: controllers,
  providers: services,
})
export class AppModule {}
