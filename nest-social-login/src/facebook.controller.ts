import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('facebook')
export class FacebookController {
  @UseGuards(AuthGuard('facebook'))
  @Get()
  async facebookAuth(@Req() req) {}
  
  @UseGuards(AuthGuard('facebook'))
  @Get('/callback')
  async getTokenAfterFacebookSignIn(@Req() req) {
    console.log(req.user);
  }
}
