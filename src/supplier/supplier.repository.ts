import { BadRequestException, Injectable, Provider} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Supplier } from "./supplier.entity";
import { SupplierDto } from "./supplier.dto";
import { sourceMapsEnabled } from "process";
import { error } from "console";

@Injectable()
export class SupplierRepository{
    constructor(@InjectRepository(Supplier)
    private readonly supplierRepository:Repository<Supplier>){}
    
    async getSuppliers():Promise<Supplier[]>{
        return this.supplierRepository.find();
    }

    async getSupplierById(id:string):Promise<Supplier>{
        return this.supplierRepository.findOne({where:{id}})
    }

    async createSupplier(supplierDto:SupplierDto){
        const newSupplier = this.supplierRepository.create(supplierDto)
        if(!newSupplier){
            throw new BadRequestException
        }
        this.supplierRepository.save(newSupplier);
        return newSupplier;  
    }

    async updateSupplier(id:string, updateSupplierDto:Partial<Supplier>):Promise<Supplier>{
        const supplier = await this.supplierRepository.findOne({where:{id}})
        if(!supplier){
            throw new Error(`El provedor con ${id} no fue encontrado`)
        }
        Object.assign(supplier, updateSupplierDto)
        await this.supplierRepository.save(supplier)
        return supplier        
    }

    async deleteSupplier(id:string):Promise<Supplier>{
        const supplier = await this.supplierRepository.findOne({where:{id}})
        if(!supplier){
            throw new Error(`El Provedor con id ${id} no fue encontrado`)
        }
        await this.supplierRepository.remove(supplier)
        return supplier
    }
}