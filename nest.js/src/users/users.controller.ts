import { Controller, Get, UseGuards, Request, Post, Body, Response } from '@nestjs/common'
import { ApiBody, ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UsersService } from './users.service'
import { SignInDto } from './sign-in.dto'

@Controller()
export class UsersController {

  constructor(
    private usersService: UsersService
  ) {}

  @Post('users/sign_up')
  @ApiBody({ type: SignInDto, required: true })
  async signUp( //@Body() body: SignInDto) {
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return await this.usersService.signUp(username, password)
  }
  
  @Post('users/sign_in')
  async signIn(@Body() body: SignInDto, @Response() res) {
    const result = await this.usersService.signIn(body.username, body.password)
    res.status(!result.success ? 401 : 200)
      .send(result)
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
