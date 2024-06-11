import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/products.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Supplier"} )
export class Supplier{
    @PrimaryGeneratedColumn('uuid')
    id:string
    
    @ApiProperty({
        description:"Nombre del Proveedor",
        example:"Supplier A"
    })
    @Column({length:50,nullable:false})
    name:string
    
    @ApiProperty({
        description:"Número de telefono del proveedor",
        example: 123456789,
    })
    @Column({type:"varchar",nullable:false})
    phone:string
    
    @ApiProperty({
        description:"Correo electronico unico del proveedor",
        example:"proveedor@example.com"
    })
    @Column({unique:true, length:50})
    email:string
    @ApiProperty({
        description:"Direccion del usuario",
        example:"123 Main St",
    })
    @Column({type:"text", nullable:true})
    address:string;
     
    @OneToMany(()=>Product, product => product.supplier)
    @JoinColumn()
    products:Product[]
    
}