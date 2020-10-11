import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import constants from '../constants'
import { User } from '../models/user'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  encryptPassword(plainText: string) {
    return bcrypt.hashSync(plainText, constants.PASSWORD_SALT)
  }

  verifyPassword(user: User, plainPassword: string) {
    return bcrypt.compareSync(plainPassword, user.password)
  }

  getToken(user: User): string {
    const payload = {
      email: user.email,
      userId: user.id
    }
    const token = this.jwtService.sign(payload)
    return token
  }
}
