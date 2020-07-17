import { Categories } from "../entity/Categories";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

export class CategoriesService {
  public sessionInfo: any;
  private categoriesRepository: CategoriesRepository;
  isUpdate: boolean = false;

  constructor() {
    this.categoriesRepository = new CategoriesRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.categoriesRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let data: any = await this.categoriesRepository.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveOne(datas: Categories) {
    try {
      let data: any = await this.categoriesRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
