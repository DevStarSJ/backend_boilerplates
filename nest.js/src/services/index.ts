import { UserService } from './userService'
import { ItemService } from './itemService'
import { AuthService } from './authService'
import { JwtAuthGuard } from './auth/jwtAuthGuard'
import { JwtStrategy } from './auth/jwtStrategy'
import { BookService } from './bookService'

export default [
  UserService,
  AuthService,
  JwtAuthGuard,
  JwtStrategy,
  ItemService,
  BookService,
]
