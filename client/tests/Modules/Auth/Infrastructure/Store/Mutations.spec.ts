import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { Mutations } from '~/Modules/Auth/Infrastructure/Store/Mutations'
import { User } from '~/Modules/Auth/Domain/Models/User'

describe('client/Modules/Auth/Infrastructure/Store/Mutations.ts', () => {
  const state = State()

  describe('setLoadingStatus', () => {
    it.each`
      mutationPayload | expectedStatus
      ${'successful'} | ${'successful'}
      ${'failed'}     | ${'failed'}
      ${'loading'}    | ${'loading'}
      ${null}         | ${null}
    `('should set loadingStatus to "$expectedStatus" when called with "$mutationPayload"',
      ({ mutationPayload, expectedStatus }) => {
        Mutations.setLoadingStatus(state, mutationPayload)

        expect(state.loadingStatus).toEqual(expectedStatus)
      })
  })

  describe('storeUser', () => {
    describe('when user exists', () => {
      it('should correctly store the provided user', () => {
        Mutations.storeUser(state, User.make({
          id: 'a-user-id',
          name: 'a-user-name',
          master: false,
          admin: false,
          player: true,
        }))

        expect(state.user).toEqual({
          id: 'a-user-id',
          name: 'a-user-name',
          master: false,
          admin: false,
          player: true,
        })

        expect(state.isUserConnected).toBe(true)
      })
    })

    describe('when user does not exist', () => {
      it('should correctly store the provided user', () => {
        Mutations.storeUser(state, User.make({
          id: '',
          name: '',
          master: false,
          admin: false,
          player: false,
        }))

        expect(state.user).toEqual({
          id: '',
          name: '',
          master: false,
          admin: false,
          player: false,
        })

        expect(state.isUserConnected).toBe(false)
      })
    })
  })
})
