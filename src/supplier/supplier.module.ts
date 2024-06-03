import { Module } from "@nestjs/common";
import { SupplierController } from "./supplier.controller";
import { SupplierServices } from "./supplier.services";
import { SupplierRepository } from "./supplier.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Supplier } from "./supplier.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Supplier])],
    providers:[SupplierServices,SupplierRepository],
    controllers:[SupplierController]
})
export class SupplierModule{}