import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("supplier")
export class Supplier {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"supplier_name"})
  supplier_name: string;
}
