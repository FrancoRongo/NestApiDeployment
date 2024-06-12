import { Body, Controller, Delete, Get, HttpCode, HttpStatus, InternalServerErrorException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { Supplier } from "./supplier.entity";
import { SupplierServices } from "./supplier.services";
import { SupplierDto } from "./supplier.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Role } from "src/auth/roles.enum";
import { Roles } from "src/decorators/roles.decorator";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";

@Controller('supplier')
@ApiTags('Suppliers')
export class SupplierController{
    constructor (private readonly supplierServices : SupplierServices){}
    
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Get()
    @UseGuards(AuthGuard, /*RolesGuard*/)
    //@Roles(Role.Admin, Role.SuperAdmin)
    async getSuppliers():Promise<Supplier[]>{
        try{
            return this.supplierServices.getSuppliers()
        }catch(error){
            throw new InternalServerErrorException('Error interno del servidor al buscar proveedores')
        }
    }

    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    @UseGuards(AuthGuard,/*RolesGuard*/)
    //@Roles(Role.Admin, Role.SuperAdmin)
    async getSupplierId(@Param('id') id:string): Promise<Supplier>{
        try{
            return await this.supplierServices.getSupplierId(id)

        }catch(error){
            throw new InternalServerErrorException('Error interno del servidor al buscar un proveedor por id')
        }
    }
    
    @ApiBearerAuth()
    @HttpCode(HttpStatus.CREATED)
    @ApiBody({})
    @Post()
    @UseGuards(AuthGuard,/*RolesGuard*/)
    //@Roles(Role.Admin,Role.SuperAdmin)
    async createSupplier(@Body() supplierDto:SupplierDto): Promise<Supplier>{
        try{
            return await this.supplierServices.createSupplier(supplierDto)
        } catch(error){
            throw new InternalServerErrorException('Error interno del servidor al crear el proveedor')
        }
    }
    
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @ApiBody({})
    @Put(":id")
    @UseGuards(AuthGuard,/*RolesGuard*/)
    //@Roles(Role.Admin,Role.SuperAdmin)
    async updateSupplier(@Param('id') id:string, @Body() supplierDto:Partial<SupplierDto>): Promise<Supplier>{
        try{
            return await this.supplierServices.updateSupplier(id,supplierDto)
        }catch (error){
            throw new InternalServerErrorException('Error interno del servidor al modificar el proveedor')
        }
    }
    
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    @Delete(":id")
    @UseGuards(AuthGuard,/*RolesGuard*/)
    //@Roles(Role.Admin,Role.SuperAdmin)
    async deleteSupplier(@Param('id') id:string):Promise<Supplier>{
        try{
            return await this.supplierServices.deteleSupplier(id)
        } catch(error){
            throw new InternalServerErrorException('Error interno del servidor al borrar un proveedor')
        }
    }
}

