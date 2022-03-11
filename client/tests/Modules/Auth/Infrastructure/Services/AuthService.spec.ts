import { AxiosInstance } from 'axios'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { AuthService } from '~/Modules/Auth/Infrastructure/Services/AuthService'
import { WrapperApiResponse } from '~/Modules/Shared/Infrastructure/DTOs/WrapperApiResponse'
import { FetchUserApiResponse } from '~/Modules/Auth/Infrastructure/DTOs/FetchUserApiResponse'
import mocked = jest.mocked;

describe('client/Modules/Auth/Infrastructure/Services/AuthService.ts', () => {
  let lamansionApi: AxiosInstance

  beforeEach(() => {
    lamansionApi = {
      get: jest.fn().mockRejectedValue(new Error('unexpected call to axios.get')),
    } as unknown as AxiosInstance
  })

  describe('fetchUser', () => {
    let authService: AuthServiceInterface

    beforeEach(() => {
      authService = new AuthService(lamansionApi)

      const fetchUser: WrapperApiResponse<FetchUserApiResponse> = {
        data: [{
          id: 'a-user-id',
          type: 'user',
          attributes: {
            username: 'a-user-name',
            admin: true,
            image: 'a-user-image',
            master: false,
            player: true,
          },
        }],
      }

      mocked(lamansionApi.get).mockResolvedValue({
        data: fetchUser,
      })
    })

    it('should call the endpoint url correctly', async () => {
      await authService.fetchUser('discord-user-id')

      expect(lamansionApi.get).toHaveBeenCalledWith('auth/user/discord-user-id')
    })
  })
})
