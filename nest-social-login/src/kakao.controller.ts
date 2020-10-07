import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('kakao')
export class KakaoController {

  @Get()
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuth(@Req() req) {}

  @UseGuards(AuthGuard('kakao'))
  @Get('/oauth')
  async getTokenAfterKakaoSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }
}
