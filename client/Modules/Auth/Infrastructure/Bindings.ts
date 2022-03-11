import { Plugin } from '@nuxt/types'
import { Router } from '~/Modules/Router/Infrastructure/Router'
import { AuthRoutes } from '~/Modules/Auth/Infrastructure/Router/AuthRoutes'
import { AuthService } from '~/Modules/Auth/Infrastructure/Services/AuthService'
import { AuthServiceInterface } from '~/Modules/Auth/Domain/Service/AuthServiceInterface'

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $authService: AuthServiceInterface
  }
}

Router.addRoutes(AuthRoutes)
const authProvider: Plugin = ({ app: { $lamansionApi } }, inject) => {
  inject('authService', new AuthService($lamansionApi))
}

export default authProvider
