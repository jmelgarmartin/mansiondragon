import { Module } from '@nestjs/common';
import { AuthController } from '~/src/Modules/Auth/Infrastructure/Controllers/Auth';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
