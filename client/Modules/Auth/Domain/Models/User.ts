export type Id = string
type Name = string

export interface MakeParams {
  id: Id
  name: Name
}

export class User {
  private constructor (
    private _id: Id,
    private _name: Name
  ) {
  }

  public static make (data: MakeParams): User {
    return new User(
      data.id,
      data.name
    )
  }

  public get id (): Id {
    return this._id
  }

  public get name (): Name {
    return this._name
  }
}
