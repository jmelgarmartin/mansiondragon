import { Module } from '@nestjs/common';
import { AuthController } from '~/src/Modules/Auth/Infrastructure/Controllers/Auth';
import { UserFetcher } from "~/src/Modules/Auth/Application/UseCases/UserFetcher";
import { UserRepository } from "~/src/Modules/Auth/Infrastructure/Repositories/UserRepository";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [UserFetcher, UserRepository],
})
export class AuthModule {}
