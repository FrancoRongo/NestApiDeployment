import { OrderRepository } from "./orders.repository";
import { Order } from "./orders.entity";
import { CreateOrderDto } from "./createOrderDto.Dto";
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: OrderRepository);
    addOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrder(id: string): Promise<Order>;
    getOrders(): Promise<Order[]>;
}
