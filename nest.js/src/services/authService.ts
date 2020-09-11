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

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  encryptPassword(plainText: string) {
    return bcrypt.hashSync(plainText, constants.PASSWORD_SALT)
  }

  verifyPassword(user: User, plainPassword: string) {
    return bcrypt.compareSync(plainPassword, user.password)
  }

  getToken(user: User): string {
    const payload = {
      username: user.username,
      sub: user.id,
      userId: user.id
    }
    const token = this.jwtService.sign(payload)
    return token
  }
}
