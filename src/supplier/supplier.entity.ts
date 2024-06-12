import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/products.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Supplier" })
export class Supplier {
    @ApiProperty({
        description: "ID unico del proveedor",
        example: "e072ae6b-6160-4d27-a25a-55d9618a96d2"
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ApiProperty({
        description: "Nombre del Proveedor",
        example: "Supplier A"
    })
    @Column({ length: 50, nullable: false })
    name: string;
    
    @ApiProperty({
        description: "Número de telefono del proveedor",
        example: 123456789,
    })
    @Column({ type: "varchar", nullable: true })
    phone: string;
    
    @ApiProperty({
        description: "Correo electronico unico del proveedor",
        example: "proveedor@example.com"
    })
    @Column({ unique: true, length: 50 , nullable: true})
    email: string;
    
    @ApiProperty({
        description: "Direccion del usuario",
        example: "123 Main St",
    })
    @Column({ type: "text", nullable: true })
    address: string;
     
    @OneToMany(() => Product, product => product.supplier)
    @JoinColumn()
    products: Product[];
}
