import { Injectable, Inject, forwardRef } from '@nestjs/common'
import { AuthService } from '../auth/auth.service'
import { User } from './user.entity'
import { getManager } from 'typeorm'

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
    return this.authService.getToken(user)
  }
}
