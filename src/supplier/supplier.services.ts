import { Injectable } from "@nestjs/common";
import { SupplierRepository } from "./supplier.repository";
import { SupplierDto } from "./supplier.dto";
import { Supplier } from "./supplier.entity";


@Injectable()
export class SupplierServices{
    constructor(private readonly supplierRepository:SupplierRepository){}

    async getSuppliers():Promise<Supplier[]>{
        return await this.supplierRepository.getSuppliers()
    }

    async getSupplierId(id:string){
        return await this.supplierRepository.getSupplierById(id)
    }

    async createSupplier(supplierDto:SupplierDto){
        return await this.supplierRepository.createSupplier(supplierDto)
    }

    async updateSupplier(id:string, updateSupplierdto:Partial<Supplier>):Promise<Supplier>{
        return await this.supplierRepository.updateSupplier(id,updateSupplierdto)
    }

    async deteleSupplier(id:string):Promise<Supplier>{
        return await this.supplierRepository.deleteSupplier(id)
    }






}