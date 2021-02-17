import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export default class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  getToken(): string {
    const payload = {
      id: 1,
    }
    const token = this.jwtService.sign(payload)
    return token
  }
}
