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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const orderDetails_entity_1 = require("./orderDetails.entity");
const swagger_1 = require("@nestjs/swagger");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID único de la orden",
        example: "e072ae6b-6160-4d27-a25a-55d9618a96d2",
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Detalles de la orden",
        type: () => orderDetails_entity_1.OrderDetails,
    }),
    (0, typeorm_1.OneToOne)(() => orderDetails_entity_1.OrderDetails, orderDetail => orderDetail.order),
    __metadata("design:type", orderDetails_entity_1.OrderDetails)
], Order.prototype, "orderDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Fecha de la orden",
        example: "2024-05-12",
    }),
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Order.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Usuario asociado a la orden",
        type: () => users_entity_1.User,
    }),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, user => user.orders),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", users_entity_1.User)
], Order.prototype, "user", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: "orders" })
], Order);
//# sourceMappingURL=orders.entity.js.map