import { BadRequestException, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Supplier } from "./supplier.entity";
import { SupplierDto } from "./supplier.dto";

@Injectable()
export class SupplierRepository{
    findOne(): Supplier | PromiseLike<Supplier> {
        throw new Error("Method not implemented.");
    }
    constructor(@InjectRepository(Supplier)
    private readonly supplierRepository:Repository<Supplier>){}
    
    async getSuppliers():Promise<Supplier[]>{
        return this.supplierRepository.find({relations:['products']});
    }

    async getSupplierById(id:string):Promise<Supplier>{
        if(!id){
            throw new BadRequestException('Se espera un id como respuesta')
        }
        return this.supplierRepository.findOne({where:{id}})
    }

    async createSupplier(supplierDto:SupplierDto): Promise<Supplier>{
        const newSupplier = this.supplierRepository.create(supplierDto)
        if(!newSupplier){
            throw new BadRequestException
        }
        return this.supplierRepository.save(newSupplier);  
    }

    async updateSupplier(id:string, updateSupplierDto:Partial<Supplier>):Promise<Supplier>{
        if(!id){
            throw new BadRequestException('Se espear un id como respuesta')
        }
        const supplier = await this.supplierRepository.findOne({where:{id}})
        if(!supplier){
            throw new Error(`No se encuentra el proveedor con el siguiente id:${id}`)
        }
        Object.assign(supplier, updateSupplierDto)
        await this.supplierRepository.save(supplier)
        return supplier        
    }

    async deleteSupplier(id:string):Promise<Supplier>{
        if(!id){
            throw new BadRequestException('Se espera un id como respuesta')
        }
        const supplier = await this.supplierRepository.findOne({where:{id}})
        if(!supplier){
            throw new Error(`No se encuentra el proveedor con el siguiente id:${id}`)
        }
        await this.supplierRepository.remove(supplier)
        return supplier
    }
}