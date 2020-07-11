import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("orders")
export class Orders {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"order_name"})
  order_name: string;
}
