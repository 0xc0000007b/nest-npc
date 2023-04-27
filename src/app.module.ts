import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {join} from 'path'
import { OrderEntity } from './entity/order.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'orders',
    username: 'root',
    password: '',
    dropSchema: false,
    entities: [join(__dirname),'**', '*.entity.{js,ts}'],
    migrations: [join(__dirname),'**', '*.migration.{js,ts}'],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
