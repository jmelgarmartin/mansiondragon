import { Plugin } from '@nuxt/types'
import { Router } from '~/Modules/Router/Infrastructure/Router'
import { HomeRoutes } from '~/Modules/Home/Infrastructure/Router/HomeRoutes'

Router.addRoutes(HomeRoutes)
const homeProvider: Plugin = () => {}

export default homeProvider
