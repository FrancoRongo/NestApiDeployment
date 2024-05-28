import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { UsersService } from '../users/users.service';
import { OrderDetails } from 'src/orders/orderDetails.entity';
import { ProductsService } from '../products/products.service';
import { CreateOrderDto } from './createOrderDto.Dto';
export declare class OrderRepository {
    private readonly usersService;
    private readonly productsService;
    private readonly orderRepository;
    private readonly orderDetailRepository;
    constructor(usersService: UsersService, productsService: ProductsService, orderRepository: Repository<Order>, orderDetailRepository: Repository<OrderDetails>);
    addOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
}
