import { OrderRepository } from "./orders.repository";
import { Order } from "./orders.entity";
import { Product } from "src/products/products.entity";
import { CreateOrderDto } from "./createOrderDto.Dto";
export declare class OrdersService {
    private readonly ordersRepository;
    constructor(ordersRepository: OrderRepository);
    addOrder(createOrderDto: CreateOrderDto): Promise<[Order, {
        message: string;
        products: Product[];
    }]>;
    getOrder(id: string): Promise<Order>;
    getOrders(): Promise<Order[]>;
    deleteOrder(id: string): Promise<void>;
}
