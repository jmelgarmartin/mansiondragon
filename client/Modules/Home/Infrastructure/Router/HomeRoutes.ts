import { RouteConfig } from 'vue-router'
import HomePage from '~/Modules/Home/Infrastructure/Components/HomePage.vue';

export const HomeRoutes: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
  },
]
