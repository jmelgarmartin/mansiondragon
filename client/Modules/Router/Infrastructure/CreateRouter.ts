import Vue from 'vue'
import VueRouter from 'vue-router'
import { Router } from "./Router";

Vue.use(VueRouter)

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: Router.getRoutes(),
  })
}
