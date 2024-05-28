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
exports.OrderRepository = void 0;
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("./orders.entity");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const orderDetails_entity_1 = require("./orderDetails.entity");
const products_service_1 = require("../products/products.service");
const typeorm_2 = require("@nestjs/typeorm");
let OrderRepository = class OrderRepository {
    constructor(usersService, productsService, orderRepository, orderDetailRepository) {
        this.usersService = usersService;
        this.productsService = productsService;
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async addOrder(createOrderDto) {
        const user = await this.usersService.getUserById(createOrderDto.userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const order = new orders_entity_1.Order();
        order.user = user;
        order.date = new Date();
        const orderDetails = new orderDetails_entity_1.OrderDetails();
        orderDetails.price = 0;
        orderDetails.products = [];
        for (const product of createOrderDto.products) {
            const productInDB = await this.productsService.getProductById(product.id);
            if (productInDB && productInDB.stock === 0) {
                throw new Error(`No hay stock disponible del producto ${product.name}`);
            }
            else if (productInDB && productInDB.stock > 0) {
                productInDB.stock -= 1;
                await this.productsService.updateProduct(product.id, productInDB);
                orderDetails.price += productInDB.price;
                orderDetails.products.push(productInDB);
            }
        }
        const savedOrderDetails = await this.orderDetailRepository.save(orderDetails);
        order.orderDetails = savedOrderDetails;
        const savedOrder = await this.orderRepository.save(order);
        return savedOrder;
    }
    async getOrders() {
        const orders = await this.orderRepository.find({
            relations: ['user', 'orderDetails'],
        });
        return orders;
    }
    async getOrderById(id) {
        const order = await this.orderRepository.findOne({
            where: { id: id },
            relations: ['user', 'orderDetails'],
        });
        return order;
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectRepository)(orders_entity_1.Order)),
    __param(3, (0, typeorm_2.InjectRepository)(orderDetails_entity_1.OrderDetails)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        products_service_1.ProductsService,
        typeorm_1.Repository,
        typeorm_1.Repository])
], OrderRepository);
//# sourceMappingURL=orders.repository.js.map