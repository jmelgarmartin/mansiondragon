import { AxiosInstance, AxiosResponse } from 'axios'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { User, Id as UserId } from '~/Modules/Auth/Domain/Models/User'
import { WrapperApiResponse } from '~/Modules/Shared/Infrastructure/DTOs/WrapperApiResponse'
import { CreateUserApiRequest, FetchUserApiResponse } from '~/Modules/Auth/Infrastructure/DTOs/FetchUserApiResponse'

export class AuthService implements AuthServiceInterface {
  public constructor (private lamansionApi: AxiosInstance) {}

  public async fetchUser (userId: UserId): Promise<User> {
    const endpoint = `auth/discord/user/${userId}`
    const response = await this.lamansionApi.get<WrapperApiResponse<FetchUserApiResponse>>(endpoint)

    return AuthService.fetchUserFromResponse(response.data.data)
  }

  public async registerUser (userId: UserId, userName: string): Promise<User> {
    const endpoint = 'auth/user'
    const data: CreateUserApiRequest = {
      data: {
        type: 'user',
        attributes: {
          name: userName,
          discord_id: userId,
        },
      },
    }

    const response = await this.lamansionApi.post<
      CreateUserApiRequest,
      AxiosResponse<WrapperApiResponse<FetchUserApiResponse>>
    >(endpoint, data)

    return AuthService.fetchUserFromResponse(response.data.data)
  }

  private static toUser (requestedUser: FetchUserApiResponse): User {
    const {
      id,
      attributes: {
        username,
      },
      relationships: {
        roles: {
          data: userRoles,
        },
      },
    } = requestedUser

    let master = false
    let admin = false
    let player = false

    if (userRoles !== null) {
      master = userRoles.find(role => role.attributes.name === 'master') !== undefined
      admin = userRoles.find(role => role.attributes.name === 'admin') !== undefined
      player = userRoles.find(role => role.attributes.name === 'player') !== undefined
    }

    return User.make({ id, name: username, master, admin, player })
  }

  private static fetchUserFromResponse (response: FetchUserApiResponse[]): User {
    if (response.length === 0) {
      return User.make({ id: '', name: '', master: false, admin: false, player: false })
    }

    return response.map(AuthService.toUser)[0]
  }
}
