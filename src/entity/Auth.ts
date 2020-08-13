import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne,  ManyToOne } from "typeorm";
import { Customer } from "./Customer"

@Entity("auth_tokens)")
export class Auth {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name: 'access_token'})
  access_token: string;

  @Column({name: 'expires_at'})
  expires_at: Date;

  @Column({name: 'is_active'})
  is_active: string;

  // @JoinColumn({ name:"doctor_id"})
  // @ManyToOne(type => Doctors, doctor=>doctor.id)
  // doctorId: Doctors;

  @JoinColumn({ name:"customer_id"})
  @OneToOne(type => Customer,customer=>customer.id)
  customerId: Customer;

  @Column({name:"created_at"})
  created_at: Date;

  @Column({name:"updated_at"})
  updated_at: Date
}
