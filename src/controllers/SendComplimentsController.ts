import { Request, Response } from "express";
import { CurrentUser } from "../middlewares/ensureAuthenticated";
import { SendComplimentsService } from "../services/SendComplimentsService";


class SendComplimentsController {

    async handle(request: Request, response: Response) {
        const sendComplimentsService = new SendComplimentsService();
        const compliments = await sendComplimentsService.execute(CurrentUser);

        return response.json(compliments);
    }
}

export { SendComplimentsController };