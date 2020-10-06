import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  googleLogin(req) {
    const user = req.user
    if (!user) {
      return 'No user from google'
    }

    return {
      message: 'User Information from google',
      user
    }
  }
}
