import { Products } from "src/products/products.entities";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";

Entity({ name: 'Categories'})
export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    name: string

    @OneToMany(()=> Products, products => products.category)
    @JoinColumn()
    products: Products[]

}