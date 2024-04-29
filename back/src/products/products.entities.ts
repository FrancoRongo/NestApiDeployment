import { Categories } from 'src/categories/categories.entities';
import { OrdersDetails } from 'src/orders/ordersDetails.entities';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity({
name: 'Products',
})
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({
        type:'varchar',
        length: 50,
        unique:true,
        nullable: false,
    })
    name:string;

    @Column({
        type: 'text',
        nullable: false,
    })
    description: string;
  
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    })
    price: number;
    
    @Column({
        type: 'integer',
        nullable: false
    })
    stock: number

    @Column({
        type: 'varchar',
        nullable: false,
        default: 'default_img_url.jpg'
    })
    imgUrl: string

    @ManyToMany(() => OrdersDetails, orderDetails => orderDetails.products)
    @JoinColumn()
    orderDetails: OrdersDetails[];

    @ManyToOne(() => Categories, categories => categories.products)
    @JoinColumn({ name: 'category_id' })
    category: Categories;


}