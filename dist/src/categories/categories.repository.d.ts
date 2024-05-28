import { Repository } from "typeorm";
import { Category } from "./categories.entity";
export declare class CategoriesRepository {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category>;
    createCategory(categoryName: Partial<Category>): Promise<Category>;
    addCategories(): Promise<string>;
}
