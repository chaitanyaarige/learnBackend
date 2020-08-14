import { getRepository, Repository } from "typeorm";
import { Auth } from "../entity/Auth";

export class AuthRepository {
  private dao: Repository<Auth>;

  constructor() {
    this.dao = getRepository(Auth);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("auth")
      .where(data)
      .getMany();
  }

  async saveOne(data: Auth) {
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

Object.seal(AuthRepository);
