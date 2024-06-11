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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersRepository = class UsersRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAdmin() {
        return this.userRepository.find({ where: { isAdmin: true } });
    }
    async getUsers() {
        return this.userRepository.find();
    }
    async getUserById(id) {
        return this.userRepository.findOne({
            where: { id: id },
            relations: ['orders'],
        });
    }
    ;
    async getUsersByCountry(country) {
        return this.userRepository.find({ where: { country } });
    }
    async getUsersPaginated(offset, limit) {
        return this.userRepository.find({
            skip: offset,
            take: limit
        });
    }
    async getTotalCount() {
        return this.userRepository.count();
    }
    async createUser(userDto, createdAt) {
        const users = await this.getUsers();
        const newUser = this.userRepository.create(userDto);
        if (users.length === 0) {
            newUser.isSuperAdmin = true;
        }
        newUser.createdAt = createdAt;
        this.userRepository.save(newUser);
        return { newUser, createdAt };
    }
    async updateUserToAdmin(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        if (user.isAdmin === true) {
            user.isAdmin = false;
        }
        else
            (user.isAdmin = true);
        return this.userRepository.save(user);
    }
    async updateUserToSuperAdmin(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        if (user.isSuperAdmin === true) {
            user.isSuperAdmin = false;
        }
        else
            (user.isSuperAdmin = true);
        return this.userRepository.save(user);
    }
    async updateUser(id, updateUserDto) {
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
    async deleteUser(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        await this.userRepository.remove(user);
        return user;
    }
    async getUserByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async getUserByName(name) {
        return this.userRepository.findOne({ where: { name } });
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map