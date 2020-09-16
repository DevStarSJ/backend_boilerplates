import { Controller, Get, UseGuards, Request, Post, Body, UnauthorizedException } from '@nestjs/common'
import { ApiBody, ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from '../services/auth/jwtAuthGuard'
import { UserService } from '../services/userService'
import { SignInInput } from '../inputs/signInInput'

@Controller()
export class UserController {

  constructor(
    private usersService: UserService
  ) {}

  @Post('users/sign_up')
  @ApiBody({ type: SignInInput, required: true })
  async signUp( //@Body() body: SignInInput) {
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return await this.usersService.signUp(username, password)
  }

  @Post('users/sign_in')
  async signIn(@Body() body: SignInInput) {
    const result = await this.usersService.signIn(body.username, body.password)
    if (!result.success) throw new UnauthorizedException('username or password are incorrect')
    return result
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
