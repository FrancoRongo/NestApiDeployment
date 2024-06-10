import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./products.entity";
import { ProductDto } from "./products.dto";
import * as data from "../utils/data.json";
import * as dataSupplier from "../utils/dataSupplier.json"
import { Category } from "src/categories/categories.entity";
import { CategoriesServices } from "src/categories/categories.service";
import { Supplier } from "src/supplier/supplier.entity";
import { SupplierDto } from "src/supplier/supplier.dto";
import { SupplierServices } from "src/supplier/supplier.services";

@Injectable()
export class ProductsRepository {
    
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>,
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
        private readonly categoriesServices: CategoriesServices,
        @InjectRepository(Supplier)
        private supplierRepository: Repository<Supplier>,
        private supplierService: SupplierServices
    ){}

    async getProducts(): Promise<Product[]> {
        return this.productsRepository.find({relations: ['category','supplier']});
    }

    async getStockOfProduct(name: string): Promise<string>{
        const product = await this.productsRepository.findOne({where:({name})});
        if(!product) {
            throw new Error ('Producto no encontrado');
        }
        return `Quedan ${product.stock} unidades de este producto: ${product.name} `;
    }

    async getProductById(id: string): Promise<Product> {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product) { 
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    async createProduct(productDto: ProductDto): Promise<Product> {
        
        let category = new Category();
        category.name = productDto.category
        
        const categoryProduct = await this.categoriesRepository.findOne({where:{name:category.name}});
        if(!categoryProduct){
            const newCategory = await this.categoriesServices.createCategory(category)
            category= newCategory
        } else {
            category = categoryProduct
        }

        let supplier: Supplier;
        if (productDto.supplier) {
            supplier = await this.supplierRepository.findOne({where:{name: productDto.supplier}});
            if (!supplier) {
                const supplierDto = new SupplierDto({ name: productDto.supplier });
                supplier = await this.supplierService.createSupplier(supplierDto);
                
            }
        }
        
        let product = new Product()
        product.name = productDto.name
        product.description = productDto.description
        product.price = productDto.price
        product.stock = productDto.stock
        product.imgUrl = productDto.imgUrl
        product.category = category
        product.supplier = supplier
        product.supplierPrice = productDto.supplierPrice
        
        const newProduct = this.productsRepository.create(product);
        return this.productsRepository.save(newProduct);
    }
    
    async updateProduct(id: string, productDto: Partial<Product>): Promise<Product> {
        const product = await this.getProductById(id);
        this.productsRepository.merge(product, productDto);
        return this.productsRepository.save(product);
    }

    async deleteProduct(id: string): Promise<void> {
        const product = await this.getProductById(id);
        await this.productsRepository.remove(product);
    }
    //Agrega los productos hardcodeados en el data.json de la carpeta utils
    async addHardProducts(){
            
        try {
            await Promise.all(dataSupplier?.map(async(element)=>{
                let supplier:Supplier = new Supplier();
                supplier.name = element.name;
                supplier.email = element.email;
                supplier.address = element.address;
                supplier.phone = element.phone;

                const supplierDb = await this.supplierRepository.findOne({where:{name:supplier.name}})
                if(!supplierDb){
                    const newSupplier = await this.supplierService.createSupplier(supplier)
                    
                }

            }))
            await Promise.all(data?.map(async (element) => {
                let category = new Category();
                category.name = element.category
                
                const categoryProduct = await this.categoriesRepository.findOne({where:{name:category.name}});
                if(!categoryProduct){
                    const newCategory = await this.categoriesServices.createCategory(category)
                    category= newCategory
                } else {
                    category = categoryProduct
                }
        
                let supplier: Supplier;
                if (element.supplier) {
                    supplier = await this.supplierRepository.findOne({where:{name: element.supplier}});
                    if (!supplier) {
                        const supplierDto = new SupplierDto({ name: element.supplier });
                        supplier = await this.supplierService.createSupplier(supplierDto);
                        
                    }
                }
                
                const product = new Product();
                product.name= element.name;
                product.description= element.description;
                product.price=element.price;
                product.imgUrl=element.imgUrl;
                product.stock= element.stock;
                product.category= category;
                product.supplier = supplier;
                product.supplierPrice = element.supplierPrice;
            

                delete product.id;
                await this.productsRepository
                
                    .createQueryBuilder()
                    .insert()
                    .into(Product)
                    .values(product)
                    .orUpdate(['description','price','stock','imgUrl'],['name'])
                    .execute();
            }));
            return 'Producto Agregado';
        } catch (error) {
            // Manejar el error aquí
            console.error('Error al agregar categorías:', error);
            throw error; // Puedes lanzar el error nuevamente si quieres que se maneje en otro lugar
        }
    }

    async addSupplierToProducts(){

    }


    

}
