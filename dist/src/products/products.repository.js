"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("./products.entity");
const data = require("../utils/data.json");
const categories_entity_1 = require("../categories/categories.entity");
const categories_service_1 = require("../categories/categories.service");
let ProductsRepository = class ProductsRepository {
    constructor(productsRepository, categoriesRepository, categoriesServices) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
        this.categoriesServices = categoriesServices;
    }
    async getProducts() {
        return this.productsRepository.find({ relations: ['category'] });
    }
    async getStockOfProduct(name) {
        const product = await this.productsRepository.findOne({ where: ({ name }) });
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return `Quedan ${product.stock} unidades de este producto: ${product.name} `;
    }
    async getProductById(id) {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }
    async createProduct(productDto) {
        let category = new categories_entity_1.Category();
        category.name = productDto.category;
        const categoryProduct = await this.categoriesRepository.findOne({ where: { name: category.name } });
        if (!categoryProduct) {
            const newCategory = await this.categoriesServices.createCategory(category);
            category = newCategory;
        }
        else {
            category = categoryProduct;
        }
        let product = new products_entity_1.Product();
        product.name = productDto.name;
        product.description = productDto.description;
        product.price = productDto.price;
        product.stock = productDto.stock;
        product.imgUrl = productDto.imgUrl;
        product.category = category;
        const newProduct = this.productsRepository.create(product);
        return this.productsRepository.save(newProduct);
    }
    async updateProduct(id, productDto) {
        const product = await this.getProductById(id);
        this.productsRepository.merge(product, productDto);
        return this.productsRepository.save(product);
    }
    async deleteProduct(id) {
        const product = await this.getProductById(id);
        await this.productsRepository.remove(product);
    }
    async addHardProducts() {
        try {
            const categories = await this.categoriesRepository.find();
            await Promise.all(data?.map(async (element) => {
                const category = categories.find((category) => category.name === element.category);
                if (category != null) {
                }
                const product = new products_entity_1.Product();
                product.name = element.name;
                product.description = element.description;
                product.price = element.price;
                product.imgUrl = element.imgUrl;
                product.stock = element.stock;
                product.category = category;
                delete product.id;
                await this.productsRepository
                    .createQueryBuilder()
                    .insert()
                    .into(products_entity_1.Product)
                    .values(product)
                    .orUpdate(['description', 'price', 'stock', 'imgUrl'], ['name'])
                    .execute();
            }));
            return 'Producto Agregado';
        }
        catch (error) {
            console.error('Error al agregar categorías:', error);
            throw error;
        }
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        categories_service_1.CategoriesServices])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map