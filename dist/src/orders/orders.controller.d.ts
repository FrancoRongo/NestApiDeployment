import { OrdersService } from "./orders.service";
import { Order } from "./orders.entity";
import { CreateOrderDto } from "./createOrderDto.Dto";
import { Product } from "src/products/products.entity";
export declare class OrdersController {
    private readonly ordersService;
    private readonly logger;
    constructor(ordersService: OrdersService);
    createOrder(createOrderDto: CreateOrderDto): Promise<[Order, {
        message: string;
        products: Product[];
    }]>;
    getOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
}
