import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";


export class SupplierDto{
    @IsNotEmpty()
    @IsString()
    @Length(3,80)
    @ApiProperty({
        description:"El nombre del proveedor debe tener como minimo 3 caracteres",
        example:"Supplier A"
    })
    name:string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @ApiProperty({
        description:"El email del proveedor debe tener como minimo 3 caracteres",
        example:"proveedor@example.com"
    })
    email:string;

    @IsOptional()
    @Length(3,80)
    address: string;

    @IsOptional()
    @IsString()
    phone: string;
    constructor(partial: Partial<SupplierDto>) {
        Object.assign(this, partial);
    }

}