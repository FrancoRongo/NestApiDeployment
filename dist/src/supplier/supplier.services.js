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
exports.SupplierServices = void 0;
const common_1 = require("@nestjs/common");
const supplier_repository_1 = require("./supplier.repository");
let SupplierServices = class SupplierServices {
    constructor(supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    async getSuppliers() {
        return await this.supplierRepository.getSuppliers();
    }
    async getSupplierId(id) {
        return await this.supplierRepository.getSupplierById(id);
    }
    async createSupplier(supplierDto) {
        return await this.supplierRepository.createSupplier(supplierDto);
    }
    async updateSupplier(id, updateSupplierdto) {
        return await this.supplierRepository.updateSupplier(id, updateSupplierdto);
    }
    async deteleSupplier(id) {
        return await this.supplierRepository.deleteSupplier(id);
    }
};
exports.SupplierServices = SupplierServices;
exports.SupplierServices = SupplierServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supplier_repository_1.SupplierRepository])
], SupplierServices);
//# sourceMappingURL=supplier.services.js.map