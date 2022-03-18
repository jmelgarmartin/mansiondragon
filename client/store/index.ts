import Vue from 'vue'
import Vuex from 'vuex'
import { getAccessorType } from 'typed-vuex'
import user from '~/store/user'

Vue.use(Vuex)

export const State = () => ({})

export default {
  state: State,
}

export type RootState = ReturnType<typeof State>

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

// ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
export const accessorType = getAccessorType({
  modules: {
    // NOTE: Añade tus módulos aquí
    user,
  },
})

const mutationAccessorType = getAccessorType({
  modules: {
    // NOTE: Añade tus mutaciones aquí
    user: { mutations: user.mutations },
  },
})
// ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆

type AccessorToPointer<T> = { [K in keyof T]-?:
  T[K] extends (...args: infer P) => any ? { mutation: K, payload: P } :
    AccessorToPointer<T[K]> extends infer X ? (
      X extends { mutation: infer M, payload: infer P } ? (
        { mutation: `${Extract<K, string>}/${Extract<M, string>}`, payload: P }
        ) : never
      ) : never
}[keyof T]

export type MutationCallPointer = AccessorToPointer<typeof mutationAccessorType>
