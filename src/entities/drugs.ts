import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity("file_data")
export class FileData {
  @PrimaryColumn({ name: "id" })
  id: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "price" })
  ref: string;

  @Column({ name: "strip_size" })
  refType: string;
}


