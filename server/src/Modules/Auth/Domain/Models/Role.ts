export type Id = string
type Name = string

export interface MakeParams {
    id: Id
    name: Name
}

export class Role {
    private constructor (
        private _id: Id,
        private _name: Name,
    ) {
    }

    public static make (data: MakeParams): Role {
        return new Role(
            data.id,
            data.name,
        )
    }

    get id (): Id {
        return this._id
    }

    get name (): Name {
        return this._name
    }
}
