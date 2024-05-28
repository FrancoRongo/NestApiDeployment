import { AuthRepository } from "./auth.repository";
import { CreateUserDto } from "src/users/user.dto";
import { LoginUserDto } from "./loginUserDto.dto";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly authRepository;
    private readonly usersService;
    private readonly jwtService;
    constructor(authRepository: AuthRepository, usersService: UsersService, jwtService: JwtService);
    createUser(user: CreateUserDto, createdAt: string): Promise<{
        success: string;
    }>;
    signIn(loginUserDto: LoginUserDto): Promise<{
        success: string;
        token: string;
    }>;
}
