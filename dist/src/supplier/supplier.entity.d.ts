import { Product } from "src/products/products.entity";
export declare class Supplier {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    products: Product[];
}
