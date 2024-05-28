import { CategoriesServices } from "./categories.service";
import { Category } from "./categories.entity";
export declare class CategoriesControllers {
    private readonly categoriesServices;
    private readonly logger;
    constructor(categoriesServices: CategoriesServices);
    addCategories(): Promise<void>;
    createCategory(categoryName: Partial<Category>): Promise<Category>;
    getCategoryById(id: string): Promise<Category>;
    getCategories(): Promise<Category[]>;
}
