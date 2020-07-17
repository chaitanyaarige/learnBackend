import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("customer")
export class Customer {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"full_name"})
  full_name: string;

  @Column({name:"email"})
  email: string;

  @Column({name:"phone"})
  phone: number;

  @Column({name:"address"})
  address: string;

  @Column({name:"street"})
  street: string;

  @Column({name:"city_id"})
  city_id: number;

  @Column({name:"city"})
  city: string;

  @Column({name:"created_at"})
  created_at: Date;

  @Column({name:"country"})
  country: string;
}
