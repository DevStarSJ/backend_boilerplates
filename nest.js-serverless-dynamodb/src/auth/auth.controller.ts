import { Body, Controller, Post } from "@nestjs/common";
import AuthService from "./auth.service";

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    if (username === process.env.USERNAME && password === process.env.PASSWORD) {
      return {
        success: true,
        token: this.authService.getToken()
      }
    }
    return {
      success: false
    }
  }
}