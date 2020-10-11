import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export default class AuthController {

  @UseGuards(AuthGuard('google'))
  @Get('/google')
  async googleAuth(@Req() req) {}

  @UseGuards(AuthGuard('google'))
  @Get('/google/redirect')
  async getTokenAfterGoogleSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }

  @UseGuards(AuthGuard('facebook'))
  @Get('/facebook')
  async facebookAuth(@Req() req) {}

  @UseGuards(AuthGuard('facebook'))
  @Get('/facebook/redirect')
  async getTokenAfterFacebookSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }

  @Get('/kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoAuth(@Req() req) {}

  @UseGuards(AuthGuard('kakao'))
  @Get('/kakao/redirect')
  async getTokenAfterKakaoSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }

  @Get('/line')
  @UseGuards(AuthGuard('line'))
  async lineAuth(@Req() req) {}

  @UseGuards(AuthGuard('line'))
  @Get('/line/redirect')
  async getTokenAfterLineSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }

  @Get('/naver')
  @UseGuards(AuthGuard('naver'))
  async naverAuth(@Req() req) {}

  @UseGuards(AuthGuard('naver'))
  @Get('/naver/redirect')
  async getTokenAfterNaverSignIn(@Req() req) {
    console.log(req.user)
    return req.user
  }
}
