import {Injectable, Inject, forwardRef} from '@nestjs/common'
import {UsersService} from '../users/users.service'
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import constants from '../constants'
import { User } from '../users/user.entity'

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    if (user && user.password === password) {
      const {password, ...result} = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  encryptPassword(plainText: string) {
    return bcrypt.hashSync(plainText, constants.PASSWORD_SALT)
  }

  getToken(user: User): string {
    const payload = {
      username: user.username,
      sub: user.id,
      userId: user.id
    }
    const token = this.jwtService.sign(payload)
    console.log('token =', token)
    return token
  }
}
