import { State } from '~/Modules/Auth/Infrastructure/Store/State'
import { Mutations } from '~/Modules/Auth/Infrastructure/Store/Mutations'
import { Getters } from '~/Modules/Auth/Infrastructure/Store/Getters'
import { Actions } from '~/Modules/Auth/Application/Store/Actions'

export default {
  state: State,
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
}
