import { Controller, Get, UseGuards, Request } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller()
export class UsersController {

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
