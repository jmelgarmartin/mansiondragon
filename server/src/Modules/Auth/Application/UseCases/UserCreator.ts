import {Injectable} from "@nestjs/common";
import {UserRepository} from "~/src/Modules/Auth/Infrastructure/Repositories/UserRepository";
import { User } from "~/src/Modules/Auth/Domain/Models/User";
import {CreateUserModel} from "~/src/Modules/Auth/Domain/DTOs/CreateUserModel";

@Injectable()
export class UserCreator {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private userRepository: UserRepository) {
    }

    public async createUser(user: CreateUserModel): Promise<User> {
        return this.userRepository.createUser(user)
    }
}