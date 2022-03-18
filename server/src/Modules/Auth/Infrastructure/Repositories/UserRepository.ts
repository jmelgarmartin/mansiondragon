import { UserRepositoryInterface } from "~/src/Modules/Auth/Domain/Repositories/UserRepositoryInterface";
import {Connection, SelectQueryBuilder} from 'typeorm'
import { User as UserEntity } from "~/src/Modules/Auth/Infrastructure/Entities/User.entity";
import { User } from "~/src/Modules/Auth/Domain/Models/User";
import {UserTransformer} from "~/src/Modules/Auth/Infrastructure/Transformers/UserTransformer";
import { Injectable } from "@nestjs/common";
import { CreateUserModel } from "~/src/Modules/Auth/Domain/DTOs/CreateUserModel";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    private _userRepo: SelectQueryBuilder<UserEntity>
    constructor(private connection: Connection) {
        this._userRepo = connection.getRepository(UserEntity).createQueryBuilder('user')
    }

    public async findByDiscordId(userId: string): Promise<User> {
        const userEntity = await this._userRepo.where(
            'user.discord_id = :userId',
            { userId }
        )
        .leftJoinAndSelect('user.roles', 'roles')
        .getOne()

        if (userEntity === undefined) {
            return User.make({
                id: '',
                name: '',
                roles: []
            })
        }

        return UserTransformer.toModel(userEntity);
    }

    public async createUser(user: CreateUserModel): Promise<User> {
        const { identifiers } = await this._userRepo.insert().values(user).execute()

        return User.make({
            id: identifiers[0].id,
            name: user.name,
            roles: []
        });
    }
}