import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {

    orders: OrderDto[] = [];

    addOrders(orders: any): any {
        console.log(orders);
        return { state: "Orders added successfully" };
    }

}
