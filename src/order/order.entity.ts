// src/order/order.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @Column()
  address: string;

  @Column()
  total: number;

  @Column()
  status: string;  // 'pending', 'completed', 'cancelled', etc.
}
