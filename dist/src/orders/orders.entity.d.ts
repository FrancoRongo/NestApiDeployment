import { User } from "src/users/users.entity";
import { OrderDetails } from "src/orders/orderDetails.entity";
export declare class Order {
    id: string;
    orderDetails: OrderDetails;
    date: Date;
    user: User;
}
