import { AxiosInstance } from 'axios'
import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $lamansionApi: AxiosInstance
  }
}

const binding: Plugin = ({ $axios, env }, inject) => {
  inject('lamansionApi', $axios.create({ baseURL: env.lamansion.apiUrl }))
}

export default binding
