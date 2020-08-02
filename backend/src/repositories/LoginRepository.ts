import { getRepository, Repository } from "typeorm";
import { Login } from "../entity/Login";

export class LoginRepository {
  private dao: Repository<Login>;

  constructor() {
    this.dao = getRepository(Login);
  }

  async saveOne(data: Login) {
    return await this.dao.save(data);
  }

  // async findAll() {
  //   return await this.dao.find();
  // }


  // async delete(data: any) {
  //   data.active = !data.active;
  //   return await this.dao.save(data);
  // }
}

Object.seal(LoginRepository);
