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
exports.SupplierController = void 0;
const common_1 = require("@nestjs/common");
const supplier_services_1 = require("./supplier.services");
const supplier_dto_1 = require("./supplier.dto");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let SupplierController = class SupplierController {
    constructor(supplierServices) {
        this.supplierServices = supplierServices;
    }
    async getSuppliers() {
        try {
            return this.supplierServices.getSuppliers();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno del servidor al buscar proveedores');
        }
    }
    async getSupplierId(id) {
        try {
            return await this.supplierServices.getSupplierId(id);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno del servidor al buscar un proveedor por id');
        }
    }
    async createSupplier(supplierDto) {
        try {
            return await this.supplierServices.createSupplier(supplierDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno del servidor al crear el proveedor');
        }
    }
    async updateSupplier(id, supplierDto) {
        try {
            return await this.supplierServices.updateSupplier(id, supplierDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno del servidor al modificar el proveedor');
        }
    }
    async deleteSupplier(id) {
        try {
            return await this.supplierServices.deteleSupplier(id);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error interno del servidor al borrar un proveedor');
        }
    }
};
exports.SupplierController = SupplierController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "getSuppliers", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "getSupplierId", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_dto_1.SupplierDto]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "createSupplier", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Put)(":id"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "updateSupplier", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({}),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "deleteSupplier", null);
exports.SupplierController = SupplierController = __decorate([
    (0, common_1.Controller)('supplier'),
    (0, swagger_1.ApiTags)('Suppliers'),
    __metadata("design:paramtypes", [supplier_services_1.SupplierServices])
], SupplierController);
//# sourceMappingURL=supplier.controller.js.map