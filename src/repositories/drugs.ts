import { Router, Request, Response } from "express";
import { AccessDrugs } from "../services/drugs";

export class AccessDataController {
    private componentName: string = "accessData";
    private router: Router = Router();
    private service = new AccessDrugs();

    getRouter(): Router {
        this.router.post("/drugs", async (request: Request, response: Response) => {
            try {
                let reqData: any;
                reqData = request.body ? request.body.data : {};
                reqData.session = request.body.sessionInfo;
                this.service.sessionInfo = request.body.sessionInfo;
                App.PrintLog(this.constructor.name, "Search", this.service.sessionInfo);
                let result = null;
                response.send({ status: 1, data: result });
            } catch (error) {
                console.log(error);
                response.send({ status: 0, error: error });
            }
        });
        return this.router;
    }
}

