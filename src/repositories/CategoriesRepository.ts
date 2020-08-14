import { getRepository, Repository } from "typeorm";
import { Categories } from "../entity/Categories";

export class CategoriesRepository {
  private dao: Repository<Categories>;

  constructor() {
    this.dao = getRepository(Categories);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("categories")
      .where(data)
      .getMany();
  }

  async saveOne(data: Categories) {
    return await this.dao.save(data);
  }

  async findAll() {
    return await this.dao.find();
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

Object.seal(CategoriesRepository);
