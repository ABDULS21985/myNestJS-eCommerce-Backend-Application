// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  findAll(): Promise<Cart[]> {
    return this.cartRepository.find({ relations: ['user', 'product'] });
  }

  findOne(id: number): Promise<Cart> {
    return this.cartRepository.findOneBy({ id });
  }

  create(cart: Cart): Promise<Cart> {
    return this.cartRepository.save(cart);
  }

  async remove(id: number): Promise<void> {
    await this.cartRepository.delete(id);
  }
}
