import { Entity, PrimaryGeneratedColumn, JoinColumn , Column, OneToOne } from "typeorm";
import { Cities } from "./Cities";

@Entity("supplier")
export class Supplier {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"product_name"})
  product_name: string;

  @Column({name:"phone"})
  phone: number;

  @Column({name:"is_customer"})
  is_customer: boolean;

  @Column({name:"email"})
  email: string;

  @Column({name:"Address"})
  Address: string;

  @JoinColumn({name:"city_id"})
  @OneToOne(type => Cities,city=>city.id)
  city_id: Cities["id"];

  @Column({name:"city"})
  city: string;

  @Column({name:"supplier_name"})
  supplier_name: string;
}
