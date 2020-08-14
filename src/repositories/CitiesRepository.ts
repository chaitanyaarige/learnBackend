import { getRepository, Repository } from "typeorm";
import { Cities } from "../entity/Cities";

export class CitiesRepository {
  private dao: Repository<Cities>;

  constructor() {
    this.dao = getRepository(Cities);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("cities")
      .where(data)
      .getMany();
  }

  async saveOne(data: Cities) {
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

Object.seal(CitiesRepository);
