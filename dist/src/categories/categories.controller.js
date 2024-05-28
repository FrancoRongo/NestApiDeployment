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
var CategoriesControllers_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesControllers = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const swagger_1 = require("@nestjs/swagger");
let CategoriesControllers = CategoriesControllers_1 = class CategoriesControllers {
    constructor(categoriesServices) {
        this.categoriesServices = categoriesServices;
        this.logger = new common_1.Logger(CategoriesControllers_1.name);
    }
    async addCategories() {
        try {
            await this.categoriesServices.addCategories();
        }
        catch (error) {
            this.logger.error(`Error al agregar categorías: ${error.message}`);
            throw new common_1.InternalServerErrorException('Error interno al agregar categorías');
        }
    }
    async createCategory(categoryName) {
        try {
            return await this.categoriesServices.createCategory(categoryName);
        }
        catch (error) {
            this.logger.error(`Error al crear la categoria: ${error.message}`);
            throw new common_1.InternalServerErrorException('Error interno al crear la categoría');
        }
    }
    async getCategoryById(id) {
        try {
            return await this.categoriesServices.getCategoryById(id);
        }
        catch (error) {
            this.logger.error(`Error al buscar la categoria por id: ${error.message}`);
            throw new common_1.InternalServerErrorException('Error interno al buscar la categoría por id');
        }
    }
    async getCategories() {
        try {
            return await this.categoriesServices.getCategories();
        }
        catch (error) {
            this.logger.error(`Error al obtener categorías: ${error.message}`);
            throw new common_1.InternalServerErrorException('Error interno al obtener categorías');
        }
    }
};
exports.CategoriesControllers = CategoriesControllers;
__decorate([
    (0, common_1.Get)('seeder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesControllers.prototype, "addCategories", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesControllers.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesControllers.prototype, "getCategoryById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesControllers.prototype, "getCategories", null);
exports.CategoriesControllers = CategoriesControllers = CategoriesControllers_1 = __decorate([
    (0, common_1.Controller)('categories'),
    (0, swagger_1.ApiTags)("Categories"),
    __metadata("design:paramtypes", [categories_service_1.CategoriesServices])
], CategoriesControllers);
//# sourceMappingURL=categories.controller.js.map