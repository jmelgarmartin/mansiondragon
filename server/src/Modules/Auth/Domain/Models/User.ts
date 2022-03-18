import { Role } from "~/src/Modules/Auth/Domain/Models/Role";

export type Id = string
type Name = string

export interface MakeParams {
    id: Id
    name: Name
    roles: Role[]
}

export class User {
    private constructor (
        private _id: Id,
        private _name: Name,
        private _roles: Role[]
    ) {
    }

    public static make (data: MakeParams): User {
        return new User(
            data.id,
            data.name,
            data.roles
        )
    }

    get id(): Id {
        return this._id
    }

    get name(): Name {
        return this._name
    }

    get roles(): Role[] {
        return this._roles
    }
}
