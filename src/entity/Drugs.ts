import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";

@Entity("drugs")
export class Drugs {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"serial_number"})
  serial_number: string;

  @Column({name:"drug_name"})
  drug_name: string;

  @Column({name:"box_price"})
  box_price: number;

  @Column({name:"supplier"})
  supplier: string;

  @Column({name:"inventory"})
  inventory: number;

  @Column({name:"discount"})
  discount: number;
}

// route -> index.ts -> controller -> services -> doa/repository
// pg_dump -U postgres pharmacy > pharmacy2.pgsql
