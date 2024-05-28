import { OrdersService } from "./orders.service";
import { Order } from "./orders.entity";
import { CreateOrderDto } from "./createOrderDto.Dto";
export declare class OrdersController {
    private readonly ordersService;
    private readonly logger;
    constructor(ordersService: OrdersService);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
}
