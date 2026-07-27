import { Controller, Get, Post, Put, Body, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { Order } from './interface/order.interface';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  addOrder(@Body() createOrderDto: CreateOrderDto): Order[] {
    return this.orderService.addOrders(createOrderDto);
  }

  @Get()
  getOrders(@Query('userId') userId?: string): Order[] {
    if (userId) {
      return this.orderService.getOrdersByUserId(userId);
    }
    return this.orderService.getAllOrders();
  }

  @Put('status')
  updateStatus(
    @Body() body: { userId: string; productId: string; status: string },
  ): { success: boolean } {
    this.orderService.updateOrderStatus(body.userId, body.productId, body.status);
    return { success: true };
  }
}