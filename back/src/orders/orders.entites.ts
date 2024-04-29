import { Users } from 'src/users/users.entities';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrdersDetails } from './ordersDetails.entities';

@Entity({ name: 'Orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column({ type: 'timestamp', nullable: false })
  date: Date;

  @ManyToOne(() => Users, user => user.order)
  @JoinColumn({
    name: 'user_id'
  })
  users: Users;

  @OneToOne(() => OrdersDetails, orderDetails => orderDetails.order)
  orderDetails: OrdersDetails;

}
