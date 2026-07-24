import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    addOrder(@Body() orders: any): any {
        console.log(orders);
        // return this.orderService.addOrders(orders);
    }

}