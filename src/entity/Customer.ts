import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customer")
export class Customer {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"customer_name"})
  customer_name: string;
}
