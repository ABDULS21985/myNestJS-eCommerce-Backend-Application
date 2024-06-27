// src/cart/cart.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cart> {
    return this.cartService.findOne(+id);
  }

  @Post()
  create(@Body() cart: Cart): Promise<Cart> {
    return this.cartService.create(cart);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cartService.remove(+id);
  }
}
