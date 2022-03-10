import { AxiosInstance } from 'axios'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { UserId } from '~/Modules/Auth/Domain/ValueObjects/UserId'
import { User } from '~/Modules/Auth/Domain/Modules/User'

export class AuthService implements AuthServiceInterface {
  public constructor (private lamansionApi: AxiosInstance) {}

  public fetchUser (userId: UserId): Promise<User|undefined> {
    return Promise.resolve(undefined)
  }
}
