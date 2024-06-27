// src/order/order.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOneBy({ id });
  }

  create(order: Order): Promise<Order> {
    return this.orderRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
