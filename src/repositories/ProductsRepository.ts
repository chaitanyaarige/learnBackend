import { getRepository, Repository } from "typeorm";
import { Products } from "../entity/Products";

export class ProductsRepository {
  private dao: Repository<Products>;

  constructor() {
    this.dao = getRepository(Products);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("drugs")
      .where(data)
      .getMany();
  }

  async saveOne(data: Products) {
    return await this.dao.save(data);
  }

  async findAll() {
    return await this.dao.find();
  }

  async entity(id: string) {
    return await this.dao.findOne(id, {
      where:{

      }
    });
  }

  async delete(data: any) {
    data.active = !data.active;
    return await this.dao.save(data);
  }

  async findOne(data: any) {
    return await this.dao.findOne(data, {
      where: {},
    });
  }
}

Object.seal(ProductsRepository);
