import { getRepository, Repository } from "typeorm";
import { SubCategories } from "../entity/SubCategories";

export class SubCategoriesRepository {
  private dao: Repository<SubCategories>;

  constructor() {
    this.dao = getRepository(SubCategories);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("SubCategories")
      .where(data)
      .getMany();
  }

  async saveOne(data: SubCategories) {
    return await this.dao.save(data);
  }

  async findAll() {
    return await this.dao.find(
      {relations:['category_id']}
    );
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

Object.seal(SubCategoriesRepository);
