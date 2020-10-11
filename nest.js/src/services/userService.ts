import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { AuthService } from './authService'
import { User } from '../models/user'
import L from 'lodash'

@Injectable()
export class UserService {

  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async signUp(email: string, password: string) {
    const user = new User(
      email,
      this.authService.encryptPassword(password)
    )
    await user.save()
    return {
      success: true,
      user
    }
  }

  async signIn(email: string, password: string) {
    const users = await User.find({ where: { email } })
    const user = L.get(users, 0)
    if (!user) return { success: false }
    if (!this.authService.verifyPassword(user, password)) return { success: false }
    return {
      success: true,
      token: this.authService.getToken(user)
    }
  }
}
