import { User } from '~/src/Modules/Auth/Domain/Models/User';
import { CreateUserModel } from "~/src/Modules/Auth/Domain/DTOs/CreateUserModel";

export interface UserRepositoryInterface {
  findByDiscordId(userId: string): Promise<User>

  createUser(user: CreateUserModel): Promise<User>
}
