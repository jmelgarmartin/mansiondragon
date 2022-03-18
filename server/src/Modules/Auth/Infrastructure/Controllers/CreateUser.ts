import { Body, Controller, Post } from '@nestjs/common';
import { User } from '~/src/Modules/Auth/Domain/Models/User';
import { GenericApiResponse } from "~/src/Modules/Shared/Infrastructure/DTOs/GenericApiResponse";
import { UserApiResponse } from "~/src/Modules/Auth/Infrastructure/DTOs/UserApiResponse";
import { CreateUserRequest } from "~/src/Modules/Auth/Infrastructure/DTOs/CreateUserRequest";
import { UserCreator } from "~/src/Modules/Auth/Application/UseCases/UserCreator";

@Controller('auth')
export class CreateUserController {
    constructor(private userCreator: UserCreator) {
    }

    @Post('/user')
    async fetchDiscordUser(@Body() data: CreateUserRequest): Promise<GenericApiResponse<UserApiResponse>> {
        const {
            data: {
                attributes: {
                    discord_id,
                    name
                }
            }
        } = data

        const user: User = await this.userCreator.createUser({ discord_id, name })

        return ({
            data: [
                {
                    type: 'user',
                    id: user.id,
                    attributes: {
                        name: user.name
                    },
                    relationships: {
                        roles: {
                            data: user.roles.length > 0 ? user.roles.map((role) => ({
                                type: 'role',
                                id: role.id,
                                attributes: {
                                    name: role.name
                                }
                            })) : null
                        }
                    }
                }
            ]
        })
    }
}
