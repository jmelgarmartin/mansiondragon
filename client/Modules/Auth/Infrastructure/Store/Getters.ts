import { getterTree } from 'typed-vuex'
import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { User } from '~/Modules/Auth/Domain/Models/User'
import { UserTransformer } from '~/Modules/Auth/Infrastructure/Store/Transformers/UserTransformer'

export const Getters = getterTree(State, {
  getUser (state): User {
    return UserTransformer.toModel(state.user)
  },
  isLoading (state): boolean {
    return state.loadingStatus === 'loading'
  },
})
