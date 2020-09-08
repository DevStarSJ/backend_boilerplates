import { Module, forwardRef } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthModule } from '../auth/auth.module'
import { UsersController } from './users.controller'

@Module({
  imports: [forwardRef(() => AuthModule) ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
