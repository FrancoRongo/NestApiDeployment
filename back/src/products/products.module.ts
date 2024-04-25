import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.services";
import { ProductsRepository } from "./products.repository";

@Module ({
    controllers: [ProductController],
    providers: [ProductService,ProductsRepository]

})

export class ProductsModule {}