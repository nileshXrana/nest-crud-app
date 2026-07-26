import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { OrderModule } from './orders/order.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [ProductsModule, LoginModule, RegisterModule, OrderModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }