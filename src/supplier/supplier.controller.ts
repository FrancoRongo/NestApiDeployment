import { Body, Controller, Delete, Get, HttpCode, HttpStatus, InternalServerErrorException, Param, Post, Put } from "@nestjs/common";
import { Supplier } from "./supplier.entity";
import { SupplierServices } from "./supplier.services";
import { SupplierDto } from "./supplier.dto";

@Controller('supplier')
export class SupplierController{
    constructor (private readonly supplierServices : SupplierServices){}

    @HttpCode(HttpStatus.OK)
    @Get()
    async getSuppliers():Promise<Supplier[]>{
        try{
            return this.supplierServices.getSuppliers()
        }catch(error){
            throw new InternalServerErrorException('Error interno del servidor al buscar proveedores')
        }
    }
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    async getSupplierId(@Param('id') id:string): Promise<Supplier>{
        try{
            return await this.supplierServices.getSupplierId(id)

        }catch(error){
            throw new InternalServerErrorException('Error interno del servidor al buscar un proveedor por id')
        }
    }
    
    @HttpCode(HttpStatus.CREATED)
    @Post()
    async createSupplier(@Body() supplierDto:SupplierDto): Promise<Supplier>{
        try{
            return await this.supplierServices.createSupplier(supplierDto)
        } catch(error){
            throw new InternalServerErrorException('Error interno del servidor al crear el proveedor')
        }
    }
    
    @HttpCode(HttpStatus.OK)
    @Put(":id")
    async updateSupplier(@Param('id') id:string, @Body() supplierDto:Partial<SupplierDto>): Promise<Supplier>{
        try{
            return await this.supplierServices.updateSupplier(id,supplierDto)
        }catch (error){
            throw new InternalServerErrorException('Error interno del servidor al modificar el proveedor')
        }
    }
    
    @HttpCode(HttpStatus.OK)
    @Delete(":id")
    async deleteSupplier(@Param('id') id:string):Promise<Supplier>{
        try{
            return await this.supplierServices.deteleSupplier(id)
        } catch(error){
            throw new InternalServerErrorException('Error interno del servidor al borrar un proveedor')
        }
    }
}

