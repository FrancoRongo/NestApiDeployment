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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const auth_guard_1 = require("../auth/auth.guard");
const roles_enum_1 = require("../auth/roles.enum");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAdmin(page = 1, limit = 5) {
        try {
            return await this.usersService.getAdmin(page, limit);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno al obtener usuarios admin');
        }
    }
    async getUsers(page, limit) {
        try {
            return await this.usersService.getUsers(page, limit);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno al obtener usuarios');
        }
    }
    getUserProfile(request) {
        return "Este enpoint retorne el perfil del usuario";
    }
    async getUsersByCountry(country) {
        try {
            const countryName = country.replace(/-/g, ' ');
            const countryUsers = await this.usersService.getUsersByCountry(countryName);
            if (countryUsers.length > 0) {
                return countryUsers;
            }
            else {
                throw new common_1.NotFoundException("No hay usuarios con esa nacionalidad");
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno al obtener usuarios por país');
        }
    }
    async getUserById(id) {
        try {
            const user = await this.usersService.getUserById(id);
            if (!user) {
                throw new common_1.NotFoundException(`Usuario con ID '${id}' no encontrado`);
            }
            return user;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Error interno al obtener el usuario');
            }
        }
    }
    async updateUserToAdmin(id, updateUserDto) {
        try {
            const user = await this.usersService.updateToUserAdmin(id);
            return user;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
            }
            else {
                throw new common_1.InternalServerErrorException(`Error interno al modificar el usuario con id ${id}`);
            }
        }
    }
    async updateUserToSuperAdmin(id, updateUserDto) {
        try {
            const user = await this.usersService.updateToUserSuperAdmin(id);
            return user;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
            }
            else {
                throw new common_1.InternalServerErrorException(`Error interno al modificar el usuario con id ${id}`);
            }
        }
    }
    async updateUser(id, updateUserDto) {
        try {
            if (!updateUserDto.phone && !updateUserDto.country && !updateUserDto.city && !updateUserDto.name && !updateUserDto.email && !updateUserDto.password && !updateUserDto.address) {
                throw new common_1.BadRequestException('At least one field to update must be provided');
            }
            return await this.usersService.updateUser(id, updateUserDto);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Error interno al actualizar el usuario');
            }
        }
    }
    async deleteUser(id, req) {
        const currentUser = req.user;
        try {
            const userToDelete = await this.usersService.getUserById(id);
            if (!userToDelete) {
                throw new common_1.NotFoundException(`Usuario con ID '${id}' no encontrado`);
            }
            if (currentUser.roles[0] === roles_enum_1.Role.SuperAdmin) {
                const deletedUser = await this.usersService.deleteUser(id);
                return deletedUser;
            }
            else if (currentUser.roles[0] === roles_enum_1.Role.Admin && !userToDelete.isAdmin && !userToDelete.isSuperAdmin) {
                const deletedUser = await this.usersService.deleteUser(id);
                return deletedUser;
            }
            else {
                throw new common_1.UnauthorizedException(`No tienes permiso para eliminar este usuario, ya que tu rol no tiene los permisos para eliminar a este usuario: ${userToDelete.name}`);
            }
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Error interno al eliminar el usuario');
            }
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)("admin"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.SuperAdmin),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAdmin", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin, roles_enum_1.Role.SuperAdmin),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)("profile"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin, roles_enum_1.Role.SuperAdmin),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserProfile", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/country/:country'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('country')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsersByCountry", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('/admin/:id'),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.SuperAdmin),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserToAdmin", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('/superadmin/:id'),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.SuperAdmin),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserToSuperAdmin", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    (0, swagger_1.ApiTags)("Users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map