// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { Cart } from './cart/cart.entity';
import { Order } from './order/order.entity';
import { PaymentModule } from './payment/payment.module';
// import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Secured$321',
      database: 'ecommercedb',
      entities: [User, Product, Cart, Order],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    CartModule,
    OrderModule,
    PaymentModule,
   
  ],
})
export class AppModule {}
