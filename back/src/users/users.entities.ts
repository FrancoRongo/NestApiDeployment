import { Order } from 'src/orders/orders.entites';
import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity({
    name: 'Users',
})

export class Users{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type:'varchar',
        length: 50,
        nullable: false,
    })
    name:string

    @Column({
        type: 'varchar',
        length:50,
        nullable:false,
    })
    email: string

    @Column({
        type: 'varchar',
        length:20,
        nullable: false
    })
    password: string

    @Column({
        type:'int',
    })
    phone: number

    @Column({
        type: 'text',
        length:50
    })
    country:string

    @Column({
        type:'text'
    })
    address:string

    @Column({
        type:'text',
        length:50,
    })
    city: string
    
    @OneToMany(() => Order, order => order.users)
    @JoinColumn({
        name:'order_id'
    })
    order: Order[];


}