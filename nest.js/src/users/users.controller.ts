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
    return await this.usersService.signUp(username, password)
  }
  
  @Post('users/sign_in')
  async signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return await this.usersService.signIn(username, password)
  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
