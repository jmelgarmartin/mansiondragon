import { AuthState } from '~/Modules/Auth/Infrastructure/Store/State'
import { User } from '~/Modules/Auth/Infrastructure/Store/Models/User'

export class AuthStateFactory {
  public static make (authState: Partial<AuthState>): AuthState {
    return {
      user: authState.user ?? {} as User,
      isUserConnected: authState.isUserConnected ?? false,
      loadingStatus: authState.loadingStatus ?? null,
    }
  }
}
