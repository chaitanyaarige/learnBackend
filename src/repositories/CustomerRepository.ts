import { getRepository, Repository } from "typeorm";
import { Customer } from "../entity/Customer";

export class CustomerRepository {
  private dao: Repository<Customer>;

  constructor() {
    this.dao = getRepository(Customer);
  }

  async search(data: any) {
    return await this.dao
      .createQueryBuilder("customer")
      .where(data)
      .getMany();
  }

  async saveOne(data: Customer) {
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
      where: {
        id: data
      },
    });
  }
}

Object.seal(CustomerRepository);
