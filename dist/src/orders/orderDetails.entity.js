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
exports.OrderDetails = void 0;
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("./orders.entity");
const products_entity_1 = require("../products/products.entity");
const swagger_1 = require("@nestjs/swagger");
let OrderDetails = class OrderDetails {
};
exports.OrderDetails = OrderDetails;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID único de los detalles del pedido",
        example: "e072ae6b-6160-4d27-a25a-55d9618a96d2",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderDetails.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Precio total de los detalles del pedido",
        example: 100.50,
    }),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderDetails.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Orden asociada a estos detalles del pedido",
        type: () => orders_entity_1.Order,
    }),
    (0, typeorm_1.OneToOne)(() => orders_entity_1.Order, order => order.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: "order_id" }),
    __metadata("design:type", orders_entity_1.Order)
], OrderDetails.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Productos asociados a estos detalles del pedido",
        type: () => [products_entity_1.Product],
    }),
    (0, typeorm_1.ManyToMany)(() => products_entity_1.Product),
    (0, typeorm_1.JoinTable)({
        name: "orderdetails_products",
        joinColumn: {
            name: "orderdetail_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "product_id",
            referencedColumnName: "id"
        }
    }),
    __metadata("design:type", Array)
], OrderDetails.prototype, "products", void 0);
exports.OrderDetails = OrderDetails = __decorate([
    (0, typeorm_1.Entity)()
], OrderDetails);
//# sourceMappingURL=orderDetails.entity.js.map