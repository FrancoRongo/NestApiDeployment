import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import { ProductDto } from "./products.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<Product[]>;
    getStockOfProduct(name: string): Promise<string>;
    getAddHardProduct(): Promise<string>;
    getProductById(id: string): Promise<Product>;
    createProduct(productDto: ProductDto): Promise<Product>;
    updateProduct(id: string, productDto: Partial<Product>): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}
