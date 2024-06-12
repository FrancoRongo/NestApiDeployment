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
exports.Supplier = void 0;
const swagger_1 = require("@nestjs/swagger");
const products_entity_1 = require("../products/products.entity");
const typeorm_1 = require("typeorm");
let Supplier = class Supplier {
};
exports.Supplier = Supplier;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID unico del proveedor",
        example: "e072ae6b-6160-4d27-a25a-55d9618a96d2"
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Supplier.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nombre del Proveedor",
        example: "Supplier A"
    }),
    (0, typeorm_1.Column)({ length: 50, nullable: false }),
    __metadata("design:type", String)
], Supplier.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Número de telefono del proveedor",
        example: 123456789,
    }),
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Correo electronico unico del proveedor",
        example: "proveedor@example.com"
    }),
    (0, typeorm_1.Column)({ unique: true, length: 50, nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Direccion del usuario",
        example: "123 Main St",
    }),
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => products_entity_1.Product, product => product.supplier),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Supplier.prototype, "products", void 0);
exports.Supplier = Supplier = __decorate([
    (0, typeorm_1.Entity)({ name: "Supplier" })
], Supplier);
//# sourceMappingURL=supplier.entity.js.map