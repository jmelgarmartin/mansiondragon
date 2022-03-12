import { actionTree } from 'typed-vuex'
import { Id as UserId } from '~/Modules/Auth/Domain/Models/User'
import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { Mutations } from '~/Modules/Auth/Infrastructure/Store/Mutations'
import { Getters } from '~/Modules/Auth/Infrastructure/Store/Getters'

export const Actions = actionTree({ state: State, getters: Getters, mutations: Mutations }, {
  async fetchUser ({ commit }, userId: UserId) {
    commit('setLoadingStatus', 'loading')
    const user = await this.$authService.fetchUser(userId)

    commit('storeUser', user)

    commit('setLoadingStatus', 'successful')
  },

  async registerUser ({ commit }, { userId, name }: {userId: UserId, name: string}) {
    commit('setLoadingStatus', 'loading')
    const user = await this.$authService.registerUser(userId, name)

    commit('storeUser', user)

    commit('setLoadingStatus', 'successful')
  },
})
