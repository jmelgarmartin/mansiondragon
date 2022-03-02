import { Plugin } from '@nuxt/types'
import { Router } from '~/Modules/Router/Infrastructure/Router'
import { AuthRoutes } from '~/Modules/Auth/Infrastructure/Router/AuthRoutes'

Router.addRoutes(AuthRoutes)
const authProvider: Plugin = () => {}

export default authProvider
