import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ProductsRepository } from "./products.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { Category } from "src/categories/categories.entity";
import { CategoriesRepository } from "src/categories/categories.repository";
import { CategoriesServices } from "src/categories/categories.service";
import { SupplierRepository } from "src/supplier/supplier.repository";
import { SupplierServices } from "src/supplier/supplier.services";
import { Supplier } from "src/supplier/supplier.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product]), 
             TypeOrmModule.forFeature([Category]),
             TypeOrmModule.forFeature([Supplier])
        
            
],
    providers:[ProductsService, ProductsRepository,  CategoriesRepository, CategoriesServices, SupplierRepository, SupplierServices],
    controllers:[ProductsController]
})
export class ProductsModule{}