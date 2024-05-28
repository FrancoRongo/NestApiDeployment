import { AuthService } from "./auth.service";
import { LoginUserDto } from "./loginUserDto.dto";
import { CreateUserDto } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    private readonly logger;
    createUser(user: CreateUserDto): {
        userWithoutPassword: CreateUserDto;
        createdAt: Date;
    };
    signIn(loginUserDto: LoginUserDto): Promise<{
        token: {
            success: string;
            token: string;
        };
    }>;
}
