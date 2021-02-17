import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import AuthController from './auth.controller'
import AuthService from './auth.service'
import JwtAuthGuard from './jwt.auth.guard'
import JwtStrategy from './jwt.strategy'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  providers: [ AuthService, JwtAuthGuard, JwtStrategy ],
  controllers: [ AuthController ],
  exports: [ JwtAuthGuard ],
})
export default class AuthModule {}