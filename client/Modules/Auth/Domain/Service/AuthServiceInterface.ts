import { User, Id as UserId } from '~/Modules/Auth/Domain/Models/User'

export interface AuthServiceInterface {
  fetchUser: (userId: UserId) => Promise<User>
  registerUser (userId: UserId, userName: string): Promise<User>
}
