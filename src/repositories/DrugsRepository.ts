import { getRepository, Repository } from "typeorm";
import { Drugs } from "../entity/Drugs";

export class DrugsRepository {
  private dao: Repository<Drugs>;

  constructor() {
    this.dao = getRepository(Drugs);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("drugs")
      .where(data)
      .getMany();
  }

  async saveOne(data: Drugs) {
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

Object.seal(DrugsRepository);
