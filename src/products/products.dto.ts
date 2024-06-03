import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsOptional, isNumber } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Nombre del producto",
        example: "Camiseta",
    })
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Descripción del producto",
        example: "Camiseta de algodón con estampado de unicornio",
    })
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: "Precio del producto",
        example: 19.99,
    })
    readonly price: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: "Cantidad en stock del producto",
        example: 100,
    })
    readonly stock: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "URL de la imagen del producto",
        example: "https://example.com/image.jpg",
    })
    readonly imgUrl: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Categoría del producto",
        example: "Ropa",
    })
    readonly category: string;

    @IsOptional()
    @IsString()
    readonly supplier:string

    @IsOptional()
    @IsNumber()
    readonly supplierPrice:number 

    constructor(partial: Partial<ProductDto>) {
        Object.assign(this, partial);
    }
}
