import { Controller, Get, Param, Req } from '@nestjs/common';
import {UserFetcher} from "~/src/Modules/Auth/Application/UseCases/UserFetcher";
import {User} from "~/src/Modules/Auth/Domain/Models/User";
import { Response, response } from "express";
import {GenericApiResponse, GenericModelResponse} from "~/src/Modules/Shared/Infrastructure/DTOs/GenericApiResponse";
import {UserApiResponse} from "~/src/Modules/Auth/Infrastructure/DTOs/UserApiResponse";

@Controller('auth')
export class AuthController {
  constructor(private userFetcher: UserFetcher) {
  }

  @Get('/discord/user/:id')
  async fetchDiscordUser(@Param('id') id: string):Promise<GenericApiResponse<UserApiResponse>> {
    const user: User = await this.userFetcher.fetchByDiscordId(id)

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
