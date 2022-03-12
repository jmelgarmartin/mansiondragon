import { mutationTree } from 'typed-vuex'
import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { LoadingStatus } from '~/Modules/Auth/Domain/ValueObjects/LoadingStatus'
import { User } from '~/Modules/Auth/Domain/Models/User'
import { UserTransformer } from '~/Modules/Auth/Infrastructure/Store/Transformers/UserTransformer'

export const Mutations = mutationTree(State, {
  storeUser (state, user: User) {
    state.isUserConnected = user.id.trim() !== ''

    state.user = UserTransformer.toStore(user)
  },
  setLoadingStatus (state, loadingStatus: LoadingStatus) {
    state.loadingStatus = loadingStatus
  },
})
