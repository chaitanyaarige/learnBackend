import { Cities } from "../entity/Cities";
import { CitiesRepository } from "../repositories/CitiesRepository";

export class CitiesService {
  public sessionInfo: any;
  private citiesRepository: CitiesRepository;
  isUpdate: boolean = false;

  constructor() {
    this.citiesRepository = new CitiesRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.citiesRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let data: any = await this.citiesRepository.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveOne(datas: Cities) {
    try {
      let data: any = await this.citiesRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
