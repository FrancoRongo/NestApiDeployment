import { Repository } from "typeorm";
import { Product } from "./products.entity";
import { ProductDto } from "./products.dto";
import { Category } from "src/categories/categories.entity";
import { CategoriesServices } from "src/categories/categories.service";
export declare class ProductsRepository {
    private readonly productsRepository;
    private categoriesRepository;
    private readonly categoriesServices;
    constructor(productsRepository: Repository<Product>, categoriesRepository: Repository<Category>, categoriesServices: CategoriesServices);
    getProducts(): Promise<Product[]>;
    getStockOfProduct(name: string): Promise<string>;
    getProductById(id: string): Promise<Product>;
    createProduct(productDto: ProductDto): Promise<Product>;
    updateProduct(id: string, productDto: Partial<Product>): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
    addHardProducts(): Promise<string>;
}
