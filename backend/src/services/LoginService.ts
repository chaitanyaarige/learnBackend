import { Login } from "../entity/Login";
import { LoginRepository } from "../repositories/LoginRepository";

export class LoginService {
  public sessionInfo: any;
  private loginRepository: LoginRepository;
  isUpdate: boolean = false;

  constructor() {
    this.loginRepository = new LoginRepository();
  }

  async saveOne(datas: Login) {
    try {
      let data: any = await this.loginRepository.saveOne(datas);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
