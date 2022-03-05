import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('oauth/discord/authorize')
  authorize(req: Request): string {
    console.log('aa', req);

    return 'This action returns all cats';
  }
}
