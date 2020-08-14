import { Customer } from "../entity/Customer";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class CustomerService {
  public sessionInfo: any;
  private customerRepository: CustomerRepository;
  isUpdate: boolean = false;

  constructor() {
    this.customerRepository = new CustomerRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.customerRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: Customer) {
    try {
      let data: any = await this.customerRepository.findOne(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let data: any = await this.customerRepository.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveOne(datas: Customer) {
    try {
      let data: any = await this.customerRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
