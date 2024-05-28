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
exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const products_entity_1 = require("../products/products.entity");
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: "ID del usuario que realiza el pedido",
        example: "e072ae6b-6160-4d27-a25a-55d9618a96d2",
    }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)({ message: 'Se espera que products sea un array' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Se espera que products contenga al menos un elemento' }),
    (0, swagger_1.ApiProperty)({
        type: [products_entity_1.Product],
        description: "Productos en el pedido",
        example: [{ id: "1", name: "Camiseta", description: "Camiseta de algodón", price: 19.99, stock: 100 }],
    }),
    __metadata("design:type", Object)
], CreateOrderDto.prototype, "products", void 0);
//# sourceMappingURL=createOrderDto.Dto.js.map