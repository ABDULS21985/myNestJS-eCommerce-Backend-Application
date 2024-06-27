// src/order/order.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(+id);
  }

  @Post()
  create(@Body() order: Order): Promise<Order> {
    return this.orderService.create(order);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.orderService.remove(+id);
  }
}
