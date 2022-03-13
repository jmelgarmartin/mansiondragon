import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/discord/user/:id')
  fetchUser(@Param('id') id: string) {
    return [
      {
        message: `Hello there! ${id}`,
      },
    ];
  }
}
