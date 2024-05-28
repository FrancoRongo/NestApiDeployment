import { Product } from "./products.entity";
import { ProductDto } from "./products.dto";
import { ProductsRepository } from "./products.repository";
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<Product[]>;
    getStockOfProduct(name: string): Promise<string>;
    addHardProduct(): Promise<string>;
    getProductById(id: string): Promise<Product>;
    createProduct(productDto: ProductDto): Promise<Product>;
    updateProduct(id: string, productDto: Partial<Product>): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}
