import { Auth } from "../entity/Auth";
import { AuthRepository } from "../repositories/AuthRepository";

export class AuthService {
  public sessionInfo: any;
  private authRepository: AuthRepository;
  isUpdate: boolean = false;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async search(item: any) {
    try {
      let data: any = await this.authRepository.search(item);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let data: any = await this.authRepository.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveOne(datas: Auth) {
    try {
      let data: any = await this.authRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
