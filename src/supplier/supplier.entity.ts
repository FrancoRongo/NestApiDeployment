import { Product } from "src/products/products.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Supplier"} )
export class Supplier{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({nullable:true})
    name:string
    @Column({nullable:true})
    phone:string
    @Column({nullable:true})
    email:string
    @Column({nullable:true})
    address:string
    @OneToMany(()=>Product, product => product.supplier)
    @JoinColumn()
    products:Product[]
    
}