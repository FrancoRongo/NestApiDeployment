import { Product } from "src/products/products.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Supplier"} )
export class Supplier{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    name:string
    @Column()
    phone:string
    @Column()
    email:string
    @Column()
    address:string
    @OneToMany(()=>Product, product => product.supplier)
    @JoinColumn()
    products:Product[]
    
}