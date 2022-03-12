import { ActionContext, Commit, Store } from 'vuex'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { User } from '~/Modules/Auth/Domain/Models/User'
import { Actions } from '~/Modules/Auth/Application/Store/Actions'
import { AuthState } from '~/Modules/Auth/Infrastructure/Store/State'
import { RootState } from '~/store'

describe('client/Modules/Auth/Application/Store/Actions.ts', () => {
  describe('fetchUser', () => {
    let $authService: AuthServiceInterface
    let commit: Commit

    beforeEach(() => {
      $authService = {
        fetchUser: jest.fn().mockRejectedValue('fetchUser called unexpectedly'),
      }

      commit = jest.fn()
    })

    describe('when it succeeds', () => {
      let fetchUserResponse: User

      beforeEach(async () => {
        fetchUserResponse = User.make({
          id: 'a-user-id',
          name: 'a-user-name',
          admin: false,
          player: true,
          master: false,
        })

        $authService.fetchUser = jest.fn().mockResolvedValue(fetchUserResponse)

        await Actions.fetchUser.bind({
          $authService,
        } as Store<AuthState>)(
          { commit } as ActionContext<AuthState, RootState>,
          'discord-user-id'
        )
      })

      it('should commit setLoadingStatus to "loading" first', () => {
        expect(commit).toHaveBeenNthCalledWith(1, 'setLoadingStatus', 'loading')
      })

      it('should commit call $authService.fetchUser once', () => {
        expect($authService.fetchUser).toHaveBeenCalledWith('discord-user-id')
      })

      it('should commit storeUser with retrieved user', () => {
        expect(commit).toHaveBeenNthCalledWith(2, 'storeUser', fetchUserResponse)
      })

      it('should commit setLoadingStatus to "successful" at last', () => {
        expect(commit).toHaveBeenNthCalledWith(3, 'setLoadingStatus', 'successful')
      })
    })
  })
})
