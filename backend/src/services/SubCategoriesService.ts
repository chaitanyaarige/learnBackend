import { SubCategories } from "../entity/SubCategories";
import { SubCategoriesRepository } from "../repositories/SubCategoriesRepository";

export class SubCategoryService {
  public sessionInfo: any;
  private subCategoriesRepository: SubCategoriesRepository;
  isUpdate: boolean = false;

  constructor() {
    this.subCategoriesRepository = new SubCategoriesRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.subCategoriesRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let data: any = await this.subCategoriesRepository.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveOne(datas: SubCategories) {
    try {
      let data: any = await this.subCategoriesRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
