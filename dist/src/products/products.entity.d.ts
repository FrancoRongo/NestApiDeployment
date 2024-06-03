import { Category } from "src/categories/categories.entity";
import { OrderDetails } from "src/orders/orderDetails.entity";
import { Supplier } from "src/supplier/supplier.entity";
export declare class ColumnNumericTransformer {
    to(data: number): number;
    from(data: string): number;
}
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Category;
    orderDetails: OrderDetails[];
    supplier: Supplier;
    supplierPrice: number;
}
