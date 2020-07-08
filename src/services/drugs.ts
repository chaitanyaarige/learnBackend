import { drugsList } from "../entity/drugs";
import { drugListRepository } from "../repositories/drugs";



export class CustomerCareService {
  public sessionInfo: any;
  private drugListRepository : drugListRepository;
  isUpdate: boolean= false;;

  constructor() {
    this.drugListRepository = new WorkflowRefRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.drugListRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
