import { IsEmail, IsOptional, IsString, Length } from "class-validator";


export class SupplierDto{
    @IsOptional()
    @IsString()
    @Length(3,80)
    name:string
    @IsOptional()
    @IsEmail()
    @IsString()
    email:string
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