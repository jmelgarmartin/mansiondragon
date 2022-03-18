import { ActionContext, Commit, Store } from 'vuex'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'
import { User } from '~/Modules/Auth/Domain/Models/User'
import { Actions } from '~/Modules/Auth/Application/Store/Actions'
import { UserState } from '~/Modules/Auth/Infrastructure/Store/State'
import { RootState } from '~/store'

describe('client/Modules/Auth/Application/Store/Actions.ts', () => {
  let $authService: AuthServiceInterface
  let commit: Commit

  beforeEach(() => {
    $authService = {
      fetchUser: jest.fn().mockRejectedValue('fetchUser called unexpectedly'),
      registerUser: jest.fn().mockRejectedValue('registerUser called unexpectedly'),
    }

    commit = jest.fn()
  })

  describe('fetchUser', () => {
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
        } as Store<UserState>)(
          { commit } as ActionContext<UserState, RootState>,
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
  describe('registerUser', () => {
    describe('when it succeeds', () => {
      let registerUserResponse: User

      beforeEach(async () => {
        registerUserResponse = User.make({
          id: 'a-user-id',
          name: 'a-user-name',
          admin: false,
          player: true,
          master: false,
        })

        $authService.registerUser = jest.fn().mockResolvedValue(registerUserResponse)

        await Actions.registerUser.bind({
          $authService,
        } as Store<UserState>)(
          { commit } as ActionContext<UserState, RootState>,
          {
            userId: 'discord-user-id',
            name: 'a-user-name',
          }
        )
      })

      it('should commit setLoadingStatus to "loading" first', () => {
        expect(commit).toHaveBeenNthCalledWith(1, 'setLoadingStatus', 'loading')
      })

      it('should commit call $authService.registerUser once', () => {
        expect($authService.registerUser).toHaveBeenCalledWith('discord-user-id', 'a-user-name')
      })

      it('should commit storeUser with retrieved user', () => {
        expect(commit).toHaveBeenNthCalledWith(2, 'storeUser', registerUserResponse)
      })

      it('should commit setLoadingStatus to "successful" at last', () => {
        expect(commit).toHaveBeenNthCalledWith(3, 'setLoadingStatus', 'successful')
      })
    })
  })
})
