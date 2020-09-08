import { Module, forwardRef } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthModule } from '../auth/auth.module'
import { UsersController } from './users.controller'
import { User } from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
