import { Controller, Get } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from './entity/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@InjectRepository(OrderEntity)private readonly ordersRepo: Repository<OrderEntity>) {}

  @Get()
  getOrders(): Observable<OrderEntity[]> {
    return from(this.ordersRepo.find()).pipe(
      map(orders => orders as OrderEntity[])
    );
  }

  @Get('/:id')
  getOrdersById(id: number): Observable<OrderEntity[]> {
    return from(this.ordersRepo.findBy({id}));
  }
  @Get('/:date')
  getOrdersByDate(orderDate: string): Observable<OrderEntity[]> {
    return from(this.ordersRepo.findBy({orderDate}));
  }
  @Get('/:type')
  getOrdersByType(type: string): Observable<OrderEntity[]> {
    return from(this.ordersRepo.findBy({type}));
  }
  @Get('/:time')
  getOrdersByTime(orderTime: string): Observable<OrderEntity[]> {
    return from(this.ordersRepo.findBy({orderTime}));
  }
}
