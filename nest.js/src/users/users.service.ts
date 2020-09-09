import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { AuthService } from '../auth/auth.service'
import { User } from './user.entity'
import { getManager } from 'typeorm'
import * as L from 'lodash'

// export type User = any;

@Injectable()
export class UsersService {
  // private readonly users: User[];

  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {
    // this.users = [
    //   { userId: 1, username: 'john', password: 'changeme' },
    //   { userId: 2, username: 'chris', password: 'secret' },
    //   { userId: 3, username: 'maria', password: 'guess' },
    // ]
  }

  async findOne(username: string): Promise<User | undefined> {
    return null
    // return this.users.find(user => user.username === username)
  }

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
