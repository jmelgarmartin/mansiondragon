import { mutationTree } from 'typed-vuex'
import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { LoadingStatus } from '~/Modules/Auth/Domain/ValueObjects/LoadingStatus'
import { User } from '~/Modules/Auth/Infrastructure/Store/Models/User'

export const Mutations = mutationTree(State, {
  storeUser (state, user: User) {
    state.user = user
  },
  setLoadingStatus (state, loadingStatus: LoadingStatus) {
    state.loadingStatus = loadingStatus
  },
})
