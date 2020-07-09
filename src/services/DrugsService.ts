import { Drugs } from "../entity/Drugs";
import { DrugsRepository } from "../repositories/DrugsRepository";

export class DrugsService {
  public sessionInfo: any;
  private drugsRepository: DrugsRepository;
  isUpdate: boolean = false;

  constructor() {
    this.drugsRepository = new DrugsRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.drugsRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let data: any = await this.drugsRepository.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveOne(datas: Drugs) {
    try {
      let data: any = await this.drugsRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
