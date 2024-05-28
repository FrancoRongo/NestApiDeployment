import { Order } from 'src/orders/orders.entity';
import { Product } from 'src/products/products.entity';
export declare class OrderDetails {
    id: string;
    price: number;
    order: Order;
    products: Product[];
}
