"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orders_entity_1 = require("./orders.entity");
const orders_repository_1 = require("./orders.repository");
const orderDetails_entity_1 = require("./orderDetails.entity");
const orders_controller_1 = require("./orders.controller");
const orders_service_1 = require("./orders.service");
const users_service_1 = require("../users/users.service");
const products_service_1 = require("../products/products.service");
const products_repository_1 = require("../products/products.repository");
const users_repository_1 = require("../users/users.repository");
const users_entity_1 = require("../users/users.entity");
const products_entity_1 = require("../products/products.entity");
const categories_repository_1 = require("../categories/categories.repository");
const categories_entity_1 = require("../categories/categories.entity");
const categories_service_1 = require("../categories/categories.service");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([orderDetails_entity_1.OrderDetails]),
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([products_entity_1.Product]),
            typeorm_1.TypeOrmModule.forFeature([orders_entity_1.Order]),
            typeorm_1.TypeOrmModule.forFeature([categories_entity_1.Category])
        ],
        providers: [
            orders_repository_1.OrderRepository,
            orderDetails_entity_1.OrderDetails,
            users_service_1.UsersService,
            products_service_1.ProductsService,
            users_repository_1.UsersRepository,
            products_repository_1.ProductsRepository,
            orders_service_1.OrdersService,
            categories_repository_1.CategoriesRepository,
            categories_service_1.CategoriesServices
        ],
        controllers: [orders_controller_1.OrdersController]
    })
], OrderModule);
//# sourceMappingURL=orders.module.js.map