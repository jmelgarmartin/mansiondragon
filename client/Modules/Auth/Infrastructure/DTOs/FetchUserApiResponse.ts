interface RoleApiRelationship {
  type: 'role'
  id: string
  attributes: {
    name: string
  }
}

export interface CreateUserApiRequest {
  data: {
    type: 'user'
    attributes: {
      name: string
      discord_id: string
    }
  }
}

export interface FetchUserApiResponse {
  type: 'user'
  id: string
  attributes: {
    username: string
    image: string | null
  }
  relationships: {
    roles: {
      data: RoleApiRelationship[] | null
    }
  }
}
