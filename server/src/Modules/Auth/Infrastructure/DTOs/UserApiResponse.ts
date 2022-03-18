import { GenericModelResponse } from "~/src/Modules/Shared/Infrastructure/DTOs/GenericApiResponse";

export interface RoleRelationship {
    id: string
    type: 'role'
    attributes: {
        name: string
    }
}

export interface UserApiResponse extends GenericModelResponse{
    relationships: {
        roles: {
            data: RoleRelationship[] | null
        }
    }
}