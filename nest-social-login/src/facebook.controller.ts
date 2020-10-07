import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('facebook')
export class FacebookController {
  @UseGuards(AuthGuard('facebook-token'))
  @Get()
  async getTokenAfterFacebookSignIn(@Req() req) {
    console.log(req.user);
  }
}
