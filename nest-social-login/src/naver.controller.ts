import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('naver')
export class NaverController {

  @Get()
  @UseGuards(AuthGuard('naver'))
  async naverAuth(@Req() req) {}

  @UseGuards(AuthGuard('naver'))
  @Get('/callback')
  async getTokenAfterNaverSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }
}
