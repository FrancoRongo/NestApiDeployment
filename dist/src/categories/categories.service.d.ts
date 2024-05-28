import { CategoriesRepository } from "./categories.repository";
import { Category } from "./categories.entity";
export declare class CategoriesServices {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    getCategoryById(id: string): Promise<Category>;
    createCategory(categoryName: Partial<Category>): Promise<Category>;
    addCategories(): Promise<string>;
    getCategories(): Promise<Category[]>;
}
