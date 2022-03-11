import { User } from '~/Modules/Auth/Domain/Models/User'
import { User as StoreUser } from '~/Modules/Auth/Infrastructure/Store/Models/User'

export class UserTransformer {
  public static toStore (user: User): StoreUser {
    return {
      id: user.id,
      name: user.name,
      admin: user.isAdmin,
      master: user.isMaster,
      player: user.isPlayer,
    }
  }

  public static toModel (storeUser: StoreUser): User {
    return User.make(storeUser)
  }
}
