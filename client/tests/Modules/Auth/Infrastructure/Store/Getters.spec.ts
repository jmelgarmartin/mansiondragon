import { AuthStateFactory } from '~/tests/Modules/Auth/Infrastructure/Helpers/Factories/AuthFactory'
import { Getters } from '~/Modules/Auth/Infrastructure/Store/Getters'
import { User } from '~/Modules/Auth/Domain/Models/User'

describe('Modules/Events/Infrastructure/Store/Getters.ts', () => {
  describe('user', () => {
    it('should retrieve user', () => {
      const state = AuthStateFactory.make({
        user: {
          id: 'a-user-id',
          name: 'a-user-name',
          master: false,
          admin: false,
          player: true,
        },
      })

      expect(Getters.user(state))
        .toEqual(User.make({
          id: 'a-user-id',
          name: 'a-user-name',
          master: false,
          admin: false,
          player: true,
        }))
    })
  })

  describe('isLoading', () => {
    it.each`
      loadingStatus   | expected
      ${null}         | ${false}
      ${'failed'}     | ${false}
      ${'successful'} | ${false}
      ${'loading'}    | ${true}
    `('should be "$expected" when loading status is "$loadingStatus"', ({ loadingStatus, expected }) => {
      const state = AuthStateFactory.make({
        loadingStatus,
      })

      expect(Getters.isLoading(state))
        .toBe(expected)
    })
  })

  describe('isUserConnected', () => {
    it.each`
      isUserConnected   | expected
      ${true}           | ${true}
      ${false}          | ${false}
    `('should be "$expected" when isUserConnected is "$isUserConnected"', ({ isUserConnected, expected }) => {
      const state = AuthStateFactory.make({
        isUserConnected,
      })

      expect(Getters.isUserConnected(state))
        .toBe(expected)
    })
  })
})
