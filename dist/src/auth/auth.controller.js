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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const loginUserDto_dto_1 = require("./loginUserDto.dto");
const user_dto_1 = require("../users/user.dto");
const users_service_1 = require("../users/users.service");
const swagger_1 = require("@nestjs/swagger");
let AuthController = AuthController_1 = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.logger = new common_1.Logger(AuthController_1.name);
    }
    createUser(user) {
        const createdAt = new Date();
        this.authService.createUser(user, createdAt.toString());
        const userWithoutPassword = user;
        delete userWithoutPassword.password;
        return { userWithoutPassword, createdAt: createdAt };
    }
    async signIn(loginUserDto) {
        try {
            const token = await this.authService.signIn(loginUserDto);
            return { token };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else if (error.response && error.response.data && error.response.data.message) {
                this.logger.error(`Error de solicitud externa: ${error.response.data.message}`);
                throw new common_1.InternalServerErrorException('Error interno del servidor');
            }
            else {
                this.logger.error(`Error no manejado: ${error.message}`);
                throw new common_1.InternalServerErrorException('Error interno del servidor');
            }
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("signin"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUserDto_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
exports.AuthController = AuthController = AuthController_1 = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map