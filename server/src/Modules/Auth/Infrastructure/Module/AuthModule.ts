import { Module } from '@nestjs/common';
import { FetchUserController } from '~/src/Modules/Auth/Infrastructure/Controllers/FetchUser';
import { UserFetcher } from "~/src/Modules/Auth/Application/UseCases/UserFetcher";
import { UserRepository } from "~/src/Modules/Auth/Infrastructure/Repositories/UserRepository";

@Module({
  imports: [],
  controllers: [ FetchUserController ],
  providers: [ UserFetcher, UserRepository ],
})
export class AuthModule {}
