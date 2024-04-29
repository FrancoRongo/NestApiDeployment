import { Products } from 'src/products/products.entities';
import { Order } from './orders.entites';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'OrderDetails' })
export class OrdersDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @OneToOne(() => Order, order => order.orderDetails)
  @JoinColumn({name:'order_id'})
  order: Order;
   
  @ManyToMany(() => Products)
  @JoinTable({
    name: 'orderDetails_products',
    joinColumn: {
      name:'product_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name:'orderDetails_id',
      referencedColumnName:'id'
    }
  })
  products: Products[];
}
