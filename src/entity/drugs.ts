import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";

@Entity()
export class Drugs {
  @PrimaryColumn()
  id: number;

  @Column({ })
  serial_number: string;

  @Column({ })
  drug_name: string;

  @Column("double")
  box_price: number;

  @Column({ })
  supplier: string;

  @Column({ })
  inventory: CharacterData;

  @Column("double")
  discount: number;
}


