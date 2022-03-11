import { AxiosInstance } from 'axios'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { User, Id as UserId } from '~/Modules/Auth/Domain/Models/User'
import { WrapperApiResponse } from '~/Modules/Shared/Infrastructure/DTOs/WrapperApiResponse'
import { FetchUserApiResponse } from '~/Modules/Auth/Infrastructure/DTOs/FetchUserApiResponse'

export class AuthService implements AuthServiceInterface {
  public constructor (private lamansionApi: AxiosInstance) {}

  public async fetchUser (userId: UserId): Promise<User|undefined> {
    const endpoint = `auth/user/${userId}`
    const response = await this.lamansionApi.get<WrapperApiResponse<FetchUserApiResponse>>(endpoint)

    return response.data.data.map(this.toUser)[0]
  }

  private toUser (requestedUser: FetchUserApiResponse): User {
    const {
      id,
      attributes: {
        username,
        player,
        master,
        admin,
      },
    } = requestedUser

    return User.make({ id, name: username, master, admin, player })
  }
}
