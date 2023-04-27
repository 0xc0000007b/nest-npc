import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column({nullable: false})
  type: string
  @Column({nullable: false})
  orderDate: string;
  @Column({nullable: false})
  orderTime: string

}
