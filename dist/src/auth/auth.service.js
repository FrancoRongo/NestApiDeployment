"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("./auth.repository");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const roles_enum_1 = require("./roles.enum");
let AuthService = class AuthService {
    constructor(authRepository, usersService, jwtService) {
        this.authRepository = authRepository;
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async createUser(user, createdAt) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const dbUser = await this.usersService.getUserByEmail(user.email);
        if (dbUser) {
            throw new common_1.BadRequestException("Email already exist");
        }
        if (!hashedPassword) {
            throw new common_1.BadRequestException("password could not be hashed");
        }
        const newUser = {
            ...user,
            password: hashedPassword
        };
        this.usersService.createUser(newUser, createdAt);
        return { success: "User created succesfully" };
    }
    async signIn(loginUserDto) {
        const { email, password } = loginUserDto;
        const dbUser = await this.usersService.getUserByEmail(email);
        if (!dbUser) {
            throw new common_1.BadRequestException("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, dbUser.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException("Invalid Password");
        }
        console.log(dbUser.isAdmin, dbUser.isSuperAdmin);
        const userPayload = {
            sub: dbUser.id,
            id: dbUser.id,
            email: dbUser.email,
            roles: [
                dbUser.isSuperAdmin ? roles_enum_1.Role.SuperAdmin : (dbUser.isAdmin ? roles_enum_1.Role.Admin : roles_enum_1.Role.User)
            ]
        };
        const token = this.jwtService.sign(userPayload);
        return { success: "User logged in successfully", token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map