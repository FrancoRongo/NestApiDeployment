import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.services";

@Module ({
    imports: [],
    controllers: [ProductController],
    providers: [ProductService]

})

export class ProductsModule {}