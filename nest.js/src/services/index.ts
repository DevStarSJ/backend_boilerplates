import UserService from './userService'
import ItemService from './itemService'
import AuthService from './authService'
import JwtAuthGuard from './auth/jwtAuthGuard'
import JwtStrategy from './auth/jwtStrategy'
import GoogleStrategy from './auth/googleStrategy'
import FacebookStrategy from './auth/facebookStrategy'
import KakaoStrategy from './auth/kakaoStrategy'
import LineStrategy from './auth/lineStrategy'
import NaverStrategy from './auth/naverStrategy'
import BookService from './bookService'

export default [
  UserService,
  AuthService,
  JwtAuthGuard,
  JwtStrategy,
  GoogleStrategy,
  FacebookStrategy,
  KakaoStrategy,
  LineStrategy,
  NaverStrategy,
  ItemService,
  BookService,
]
