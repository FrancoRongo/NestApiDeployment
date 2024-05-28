import { User } from "src/users/users.entity";
import { Repository } from "typeorm";
import { LoginUserDto } from "./loginUserDto.dto";
export declare class AuthRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    checkUserExistsByEmail(loginUserDto: LoginUserDto): Promise<boolean>;
    checkPasswordMatches(loginUserDto: LoginUserDto): Promise<boolean>;
}
