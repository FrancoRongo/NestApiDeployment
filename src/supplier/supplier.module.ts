import { Module } from "@nestjs/common";
import { SupplierController } from "./supplier.controller";
import { SupplierServices } from "./supplier.services";
import { SupplierRepository } from "./supplier.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Supplier } from "./supplier.entity";
import { ProductsRepository } from "src/products/products.repository";
import { Product } from "src/products/products.entity";
import { Category } from "src/categories/categories.entity";
import { CategoriesRepository } from "src/categories/categories.repository";
import { CategoriesServices } from "src/categories/categories.service";
import { ProductsService } from "src/products/products.service";

@Module({
    imports:[TypeOrmModule.forFeature([Supplier])],
    providers:[SupplierServices,SupplierRepository],
    controllers:[SupplierController]
})
export class SupplierModule{}