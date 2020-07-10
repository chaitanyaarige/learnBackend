import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne, JoinColumn, Double, OneToMany, OneToOne, Timestamp } from "typeorm";

enum ProductStatus {
  'out_of_stock',
  'in_stock',
  'running_low'
}

enum ProductReviews {
  'one',
  'two',
  'three',
  'four',
  'five'
}

@Entity("products")
export class Products {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"product_name"})
  product_name: string;

  @Column({name:"product_code"})
  product_code: string;

  @Column({name:"manufacturer"})
  manufacturer: string;

  @Column("int",{array: true, name:"product_category"})
  product_category: [];

  @Column("int",{array: true, name:"product_sub_category"})
  product_sub_category: [];

  @Column({name:"price"})
  price: number;

  @Column({name:"discount"})
  discount: number;

  @Column("enum", { enum: ProductStatus })
  status: ProductStatus;

  @Column({name:"is_having_sizes"})
  is_having_sizes: boolean;

  @Column({name: "sizes", type: 'jsonb', nullable: true })
  sizes: Object;

  @Column("enum", { enum: ProductReviews })
  product_ratings: ProductReviews

  @Column({name: "description"})
  description: string;

  @Column('timestamp')
  created_at: Timestamp;
}

// route -> index.ts -> controller -> services -> doa/repository
// pg_dump -U postgres pharmacy > pharmacy2.pgsql
