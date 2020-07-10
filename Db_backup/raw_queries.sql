CREATE TYPE "products_status" AS ENUM (
  'out_of_stock',
  'in_stock',
  'running_low'
);

CREATE TYPE "product_ratings" AS ENUM (
  'one',
  'two',
  'three',
  'four',
  'five'
);

CREATE TYPE "order_status" AS ENUM (
  'initialized',
  'paid',
  'delivered',
  'payment_failed',
  'cancelled'
);

CREATE TABLE "cities" (
  "id" SERIAL PRIMARY KEY,
  "city_name" varchar NOT NULL
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "category_name" varchar NOT NULL
);

CREATE TABLE "sub_categories" (
  "id" SERIAL PRIMARY KEY,
  "category_id" int REFERENCES "categories" ("id"),
  "sub_category_name" varchar NOT NULL
);

CREATE TABLE "product" (
  "id" SERIAL PRIMARY KEY,
  "product_name" varchar NOT NULL,
  "product_code" varchar,
  "manufacturer" varchar,
  "product_category" int[],
  "product_sub_category" int[] NOT NULL,
  "price" decimal  NOT NULL,
  "discount" decimal,
  "status" products_status NOT NULL,
  "is_having_sizes" boolean,
  "sizes" jsonb,
  "product_ratings" product_ratings,
  "description" text,
  "created_at" timestamp
);

CREATE TABLE "supplier" (
  "id" SERIAL PRIMARY KEY,
  "product_name" int[],
  "phone" int NOT NULL,
  "is_customer" boolean,
  "email" varchar,
  "Address1" varchar,
  "city_id" int REFERENCES "cities" ("id"),
  "city" varchar
);


CREATE TABLE "customer" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar NOT NULL,
  "email" varchar,
  "phone" int NOT NULL,
  "Address1" varchar,
  "Address2" varchar,
  "customer_orders" int[],
  "city_id" int REFERENCES "cities" ("id"),
  "city" varchar,
  "created_at" timestamp,
  "country" varchar DEFAULT 'india'
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int REFERENCES "customer" ("id"),
  "status" order_status NOT NULL,
  "order_items" jsonb,
  "total_cost" decimal NOT NULL,
  "total_discount" decimal,
  "edited_at" timestamp,
  "created_at" timestamp
);


