import { User as UserModel } from "~/src/Modules/Auth/Domain/Models/User";
import { User as UserEntity } from "~/src/Modules/Auth/Infrastructure/Entities/User.entity";
import {RoleTransformer} from "~/src/Modules/Auth/Infrastructure/Transformers/RoleTransformer";
import {Role} from "~/src/Modules/Auth/Domain/Models/Role";

export class UserTransformer {
    public static toModel(user: UserEntity): UserModel {
        const roles: Role[] = user.roles.map((role) => RoleTransformer.toModel(role))

        return UserModel.make({
            id: user.id,
            name: user.name,
            roles
        })
    }
}