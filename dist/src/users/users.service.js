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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(createUserDto, createdAt) {
        const newUser = await this.usersRepository.createUser(createUserDto, createdAt);
        return { newUser, createdAt };
    }
    async getAdmin(page = 1, limit = 5) {
        const offset = (page - 1) * limit;
        const allAdmins = await this.usersRepository.getAdmin();
        const paginatedAdmins = allAdmins.slice(offset, offset + limit);
        const usersWithoutPassword = paginatedAdmins.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
        const totalCount = allAdmins.length;
        const totalPages = Math.ceil(totalCount / limit);
        return { users: usersWithoutPassword, totalPages, totalCount };
    }
    async getUsers(page = 1, limit = 5) {
        const offset = (page - 1) * limit;
        const users = await this.usersRepository.getUsersPaginated(offset, limit);
        const usersWithoutPassword = [];
        users.forEach(user => {
            const { password, ...userWithoutPassword } = user;
            usersWithoutPassword.push(userWithoutPassword);
        });
        const totalCount = await this.usersRepository.getTotalCount();
        const totalPages = Math.ceil(totalCount / limit);
        return await { users: usersWithoutPassword, totalPages, totalCount };
    }
    async getUsersByCountry(country) {
        return await this.usersRepository.getUsersByCountry(country);
    }
    async getUserByEmail(email) {
        return await this.usersRepository.getUserByEmail(email);
    }
    async getUserByName(name) {
        return await this.usersRepository.getUserByName(name);
    }
    async getUserById(id) {
        return await this.usersRepository.getUserById(id);
    }
    async updateToUserAdmin(id) {
        return await this.usersRepository.updateUserToAdmin(id);
    }
    async updateToUserSuperAdmin(id) {
        return await this.usersRepository.updateUserToSuperAdmin(id);
    }
    async updateUser(id, updateUserDto) {
        const user = await this.usersRepository.updateUser(id, updateUserDto);
        const { password, isAdmin, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async deleteUser(id) {
        return await this.usersRepository.deleteUser(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map