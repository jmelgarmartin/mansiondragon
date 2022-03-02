import { RouteConfig } from 'vue-router'
import AuthPage from '~/Modules/Auth/Infrastructure/Components/AuthPage.vue'

export const AuthRoutes: RouteConfig[] = [
  {
    path: '/auth',
    component: AuthPage,
  },
]
