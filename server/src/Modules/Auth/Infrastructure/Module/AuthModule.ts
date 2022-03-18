import { Module } from '@nestjs/common';
import { FetchUserController } from '~/src/Modules/Auth/Infrastructure/Controllers/FetchUser';
import { UserFetcher } from "~/src/Modules/Auth/Application/UseCases/UserFetcher";
import { UserRepository } from "~/src/Modules/Auth/Infrastructure/Repositories/UserRepository";
import { CreateUserController } from "~/src/Modules/Auth/Infrastructure/Controllers/CreateUser";
import { UserCreator } from "~/src/Modules/Auth/Application/UseCases/UserCreator";

@Module({
  imports: [],
  controllers: [ FetchUserController, CreateUserController ],
  providers: [ UserFetcher, UserCreator, UserRepository ],
})
export class AuthModule {}
