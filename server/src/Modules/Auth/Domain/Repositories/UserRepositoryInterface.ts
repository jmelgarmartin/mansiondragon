import { User } from '~/src/Modules/Auth/Domain/Models/User';

export interface UserRepositoryInterface {
  findByDiscordId(userId: string): Promise<User>
}
