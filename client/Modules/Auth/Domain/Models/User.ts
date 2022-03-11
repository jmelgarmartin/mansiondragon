export type Id = string
type Name = string

export interface MakeParams {
  id: Id
  name: Name
  admin: boolean
  player: boolean
  master: boolean
}

export class User {
  private constructor (
    private _id: Id,
    private _name: Name,
    private _admin: boolean,
    private _player: boolean,
    private _master: boolean
  ) {
  }

  public static make (data: MakeParams): User {
    return new User(
      data.id,
      data.name,
      data.admin,
      data.player,
      data.master
    )
  }

  public get id (): Id {
    return this._id
  }

  public get name (): Name {
    return this._name
  }

  public get isAdmin (): boolean {
    return this._admin
  }

  public get isMaster (): boolean {
    return this._master
  }

  public get isPlayer (): boolean {
    return this._player
  }

  public get isGuest (): boolean {
    return !this._player && !this._admin && !this._master
  }
}
