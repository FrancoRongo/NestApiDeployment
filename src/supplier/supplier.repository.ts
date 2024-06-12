import { BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Supplier } from "./supplier.entity";
import { SupplierDto } from "./supplier.dto";
import { Product } from "src/products/products.entity";

@Injectable()
export class SupplierRepository{
    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
        //@InjectRepository(Product)
        //private readonly productRepository: Repository<Product>,
      ) {}
    
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

    async deleteSupplier(id: string): Promise<Supplier> {
        // Buscar el supplier por id
        const supplier = await this.supplierRepository.findOne({ where: { id } });
        if (!supplier) {
          throw new NotFoundException(`Supplier with id ${id} not found`);
        }
    
        // Eliminar todos los productos asociados al supplier
        //await this.productRepository.delete({ supplier });
    
        // Eliminar el supplier
        await this.supplierRepository.remove(supplier);
    
        return supplier;
      }
    }