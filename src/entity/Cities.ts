import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("cities")
export class Cities {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"city_name"})
  city_name: string;
}
