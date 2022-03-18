import { AxiosInstance } from 'axios'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { AuthService } from '~/Modules/Auth/Infrastructure/Services/AuthService'
import { WrapperApiResponse } from '~/Modules/Shared/Infrastructure/DTOs/WrapperApiResponse'
import { FetchUserApiResponse } from '~/Modules/Auth/Infrastructure/DTOs/FetchUserApiResponse'
import mocked = jest.mocked;
import { User } from '~/Modules/Auth/Domain/Models/User'

describe('client/Modules/Auth/Infrastructure/Services/AuthService.ts', () => {
  let lamansionApi: AxiosInstance

  beforeEach(() => {
    lamansionApi = {
      get: jest.fn().mockRejectedValue(new Error('unexpected call to axios.get')),
      post: jest.fn().mockRejectedValue(new Error('unexpected call to axios post')),
    } as unknown as AxiosInstance
  })

  describe('fetchUser', () => {
    let authService: AuthServiceInterface

    describe('when user exists', () => {
      beforeEach(() => {
        authService = new AuthService(lamansionApi)

        const fetchUser: WrapperApiResponse<FetchUserApiResponse> = {
          data: [{
            id: 'a-user-id',
            type: 'user',
            attributes: {
              username: 'a-user-name',
              image: 'a-user-image',
            },
            relationships: {
              roles: {
                data: [
                  {
                    id: 'admin-role-id',
                    type: 'role',
                    attributes: {
                      name: 'admin',
                    },
                  },
                  {
                    id: 'player-role-id',
                    type: 'role',
                    attributes: {
                      name: 'player',
                    },
                  },
                ],
              },
            },
          }],
        }

        mocked(lamansionApi.get).mockResolvedValue({
          data: fetchUser,
        })
      })

      it('should call the endpoint url correctly', async () => {
        await authService.fetchUser('discord-user-id')

        expect(lamansionApi.get).toHaveBeenCalledWith('auth/discord/user/discord-user-id')
      })

      it('should properly map the response', async () => {
        const user = await authService.fetchUser('discord-user-id')

        expect(user).toEqual(
          User.make({
            id: 'a-user-id',
            name: 'a-user-name',
            admin: true,
            master: false,
            player: true,
          })
        )
      })
    })

    describe('when user does not exists', () => {
      beforeEach(() => {
        authService = new AuthService(lamansionApi)

        const fetchUser: WrapperApiResponse<FetchUserApiResponse> = {
          data: [],
        }

        mocked(lamansionApi.get).mockResolvedValue({
          data: fetchUser,
        })
      })

      it('should call the endpoint url correctly', async () => {
        await authService.fetchUser('discord-user-id')

        expect(lamansionApi.get).toHaveBeenCalledWith('auth/discord/user/discord-user-id')
      })

      it('should properly map the response', async () => {
        const user = await authService.fetchUser('discord-user-id')

        expect(user).toEqual(
          User.make({
            id: '',
            name: '',
            admin: false,
            master: false,
            player: false,
          })
        )
      })
    })
  })

  describe('fetchUser', () => {
    let authService: AuthServiceInterface

    describe('when success', () => {
      beforeEach(() => {
        authService = new AuthService(lamansionApi)

        const registerUser: WrapperApiResponse<FetchUserApiResponse> = {
          data: [{
            id: 'a-user-id',
            type: 'user',
            attributes: {
              username: 'a-user-name',
              image: 'a-user-image',
            },
            relationships: {
              roles: {
                data: [
                  {
                    id: 'admin-role-id',
                    type: 'role',
                    attributes: {
                      name: 'admin',
                    },
                  },
                  {
                    id: 'player-role-id',
                    type: 'role',
                    attributes: {
                      name: 'player',
                    },
                  },
                ],
              },
            },
          }],
        }

        mocked(lamansionApi.post).mockResolvedValue({
          data: registerUser,
        })
      })

      it('should call the endpoint url correctly', async () => {
        await authService.registerUser('discord-user-id', 'a-user-name')

        expect(lamansionApi.post).toHaveBeenCalledWith(
          'auth/user',
          {
            type: 'user',
            attributes: {
              discord_id: 'discord-user-id',
              name: 'a-user-name',
            },
          }
        )
      })

      it('should properly map the response', async () => {
        const user = await authService.registerUser('discord-user-id', 'a-user-name')

        expect(user).toEqual(
          User.make({
            id: 'a-user-id',
            name: 'a-user-name',
            admin: true,
            master: false,
            player: true,
          })
        )
      })
    })
  })
})
