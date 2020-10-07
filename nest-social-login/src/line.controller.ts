import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('line')
export class LineController {

  @Get()
  @UseGuards(AuthGuard('line'))
  async lineAuth(@Req() req) {}

  @UseGuards(AuthGuard('line'))
  @Get('/callback')
  async getTokenAfterLineSignIn(@Req() req) {
    console.log(req.user);
  }
}
