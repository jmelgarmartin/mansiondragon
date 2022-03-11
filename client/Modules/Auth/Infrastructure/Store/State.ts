import { User } from '~/Modules/Auth/Infrastructure/Store/Models/User'
import { LoadingStatus } from '~/Modules/Auth/Domain/ValueObjects/LoadingStatus'

export const State = () => ({
  user: {} as User,
  loadingStatus: null as LoadingStatus,
})

export type AuthState = ReturnType<typeof State>
