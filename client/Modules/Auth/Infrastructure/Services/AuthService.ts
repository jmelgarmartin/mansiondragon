import { AxiosInstance } from 'axios'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { User, Id as UserId } from '~/Modules/Auth/Domain/Models/User'

export class AuthService implements AuthServiceInterface {
  public constructor (private lamansionApi: AxiosInstance) {}

  public async fetchUser (userId: UserId): Promise<User|undefined> {
    const endpoint = `auth/user/${userId}`
    const response = await this.lamansionApi.get(endpoint)

    console.log(response.data)

    return Promise.resolve(User.make({ id: userId, name: 'a' }))
  }
}
