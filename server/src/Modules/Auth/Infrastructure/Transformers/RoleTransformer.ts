import {Role as RoleEntity} from "~/src/Modules/Auth/Infrastructure/Entities/Role.entity";
import {Role as RoleModel} from "~/src/Modules/Auth/Domain/Models/Role";

export class RoleTransformer {
    public static toModel(role: RoleEntity): RoleModel {
        return RoleModel.make({
            id: role.id,
            name: role.name
        })
    }
}