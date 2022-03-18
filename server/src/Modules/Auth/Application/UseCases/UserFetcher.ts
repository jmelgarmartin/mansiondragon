import {Injectable} from "@nestjs/common";
import {UserRepository} from "~/src/Modules/Auth/Infrastructure/Repositories/UserRepository";
import { Id as UserId, User } from "~/src/Modules/Auth/Domain/Models/User";

@Injectable()
export class UserFetcher {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private userRepository: UserRepository) {
    }

    public async fetchByDiscordId(userId: UserId): Promise<User> {
        return this.userRepository.findByDiscordId(userId)
    }
}