import { Module, forwardRef } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'
import constants from '../constants'
import { JwtAuthGuard } from './jwt-auth.guard'
import { LocalAuthGuard } from './local-auth.guard'
import { AuthController } from './auth.controller'

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: constants.SECRET_KEY,
      signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard, LocalAuthGuard],
  exports: [AuthService, JwtAuthGuard, LocalAuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
