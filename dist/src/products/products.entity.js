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
exports.Product = exports.ColumnNumericTransformer = void 0;
const typeorm_1 = require("typeorm");
const categories_entity_1 = require("../categories/categories.entity");
const orderDetails_entity_1 = require("../orders/orderDetails.entity");
const swagger_1 = require("@nestjs/swagger");
class ColumnNumericTransformer {
    to(data) {
        return data;
    }
    from(data) {
        return parseFloat(data);
    }
}
exports.ColumnNumericTransformer = ColumnNumericTransformer;
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID único del producto",
        example: "e072ae6b-6160-4d27-a25a-55d9618a96d2",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nombre del producto",
        example: "Camiseta",
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Descripción del producto",
        example: "Camiseta de algodón con estampado de unicornio",
    }),
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Precio del producto",
        example: 19.99,
    }),
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
        transformer: new ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Stock disponible del producto",
        example: 100,
    }),
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "URL de la imagen del producto",
        example: "https://www.example.com/image.jpg",
    }),
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
        default: 'https://www.netambulo.com/storage/2011/12/404-not-found-gatito.jpg',
    }),
    __metadata("design:type", String)
], Product.prototype, "imgUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Categoría a la que pertenece el producto",
        example: "Ropa",
    }),
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.Category, category => category.products),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", categories_entity_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Detalles de los pedidos asociados al producto",
        type: () => [orderDetails_entity_1.OrderDetails],
    }),
    (0, typeorm_1.OneToMany)(() => orderDetails_entity_1.OrderDetails, orderDetails => orderDetails.products),
    __metadata("design:type", Array)
], Product.prototype, "orderDetails", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: 'products' })
], Product);
//# sourceMappingURL=products.entity.js.map