import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { AuthService } from './authService'
import { User } from '../models/user'
import { getManager } from 'typeorm'
import * as L from 'lodash'

@Injectable()
export class UserService {

  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async signUp(username: string, password: string) {
    const user = new User()
    user.username = username
    user.password = this.authService.encryptPassword(password)
    await getManager().save(user)
    return {
      success: true,
      user
    }
  }

  async signIn(username: string, password: string) {
    const repository = getManager().getRepository(User)
    const users = await repository.find({ where: { username } })
    const user = L.get(users, 0)
    if (!user) return { success: false }
    if (!this.authService.verifyPassword(user, password)) return { success: false }
    return {
      success: true,
      token: this.authService.getToken(user)
    }
  }
}
