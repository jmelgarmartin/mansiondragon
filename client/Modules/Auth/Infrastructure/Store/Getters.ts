import { getterTree } from 'typed-vuex'
import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { User } from '~/Modules/Auth/Domain/Models/User'
import { UserTransformer } from '~/Modules/Auth/Infrastructure/Store/Transformers/UserTransformer'

export const Getters = getterTree(State, {
  user (state): User {
    return UserTransformer.toModel(state.user)
  },
  isUserConnected (state): boolean {
    return state.isUserConnected
  },
  isLoading (state): boolean {
    return state.loadingStatus === 'loading'
  },
})
