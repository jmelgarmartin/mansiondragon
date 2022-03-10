import { UserId } from '~/Modules/Auth/Domain/ValueObjects/UserId'
import { User } from '~/Modules/Auth/Domain/Models/User'

export interface AuthServiceInterface {
  fetchUser: (userId: UserId) => Promise<User|undefined>
}
