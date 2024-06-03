import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put } from "@nestjs/common";
import { Supplier } from "./supplier.entity";
import { SupplierServices } from "./supplier.services";
import { SupplierDto } from "./supplier.dto";

@Controller('supplier')
export class SupplierController{
    constructor (private readonly supplierServices : SupplierServices){}

    @Get()
    async getSuppliers():Promise<Supplier[]>{
        try{
            return this.supplierServices.getSuppliers()
        }catch(error){
            throw new InternalServerErrorException('Error interno del servidor')
        }
    }

    @Get(':id')
    async getSupplierId(@Param('id') id:string): Promise<Supplier>{
        try{
            return await this.supplierServices.getSupplierId(id)

        }catch(error){
            throw new InternalServerErrorException('Error interno del servidor')
        }
    }

    @Post()
    async createSupplier(@Body() supplierDto:SupplierDto): Promise<Supplier>{
        try{
            return await this.supplierServices.createSupplier(supplierDto)
        } catch(error){
            throw new InternalServerErrorException('Error interno del servidor')
        }
    }

    @Put(":id")
    async updateSupplier(@Param('id') id:string, @Body() supplierDto:Partial<SupplierDto>): Promise<Supplier>{
        try{
            return await this.supplierServices.updateSupplier(id,supplierDto)
        }catch (error){
            throw new InternalServerErrorException('Error interno del servidor')
        }
    }

    @Delete(":id")
    async deleteSupplier(@Param('id') id:string):Promise<Supplier>{
        try{
            return await this.supplierServices.deteleSupplier(id)
        } catch(error){
            throw new InternalServerErrorException('Error interno del servidor')
        }
    }
}

