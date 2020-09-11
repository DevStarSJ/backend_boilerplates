import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
