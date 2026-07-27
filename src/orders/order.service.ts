import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { Order } from './interface/order.interface';

@Injectable()
export class OrderService {
  private orders: Order[] = [];

  addOrders(createOrderDto: CreateOrderDto): Order[] {
    const createdOrders: Order[] = [];
    const timestamp = Date.now();
    
    for (const item of createOrderDto.items) {
      const order: Order = {
        id: item.id,
        userId: createOrderDto.userId,
        userName: createOrderDto.userName,
        userEmail: createOrderDto.userEmail,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
        image: item.image,
        images: item.images,
        sellerId: item.sellerId,
        status: item.status,
        promoCode: item.promoCode || null,
        discountPercent: item.discountPercent || 0,
        createdAt: timestamp,
      };
      this.orders.push(order);
      createdOrders.push(order);
    }
    return createdOrders;
  }

  getOrdersByUserId(userId: string): Order[] {
    return this.orders.filter((order) => order.userId === userId);
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  updateOrderStatus(userId: string, productId: string, status: string): void {
    const order = this.orders.find(
      (o) => o.userId === userId && o.id === productId,
    );
    if (order) {
      order.status = status;
    }
  }
}
