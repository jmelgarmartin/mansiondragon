export interface CreateUserRequest {
    data: {
        type: 'user'
        attributes: {
            name: string
            discord_id: string
        }
    }
}