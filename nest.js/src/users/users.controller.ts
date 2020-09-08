import { Controller, Get, UseGuards, Request, Post, Body } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UsersService } from './users.service'

@Controller()
export class UsersController {

  constructor(
    private usersService: UsersService
  ) {}

  @Post('users/sign_up')
  async signUp(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const token = await this.usersService.signUp(username, password)
    console.log('access_token =', token)
    return {
      access_token: token
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
