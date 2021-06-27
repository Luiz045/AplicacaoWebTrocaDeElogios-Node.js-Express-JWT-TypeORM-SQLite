import { Request, Response } from "express";
import { CurrentUser } from "../middlewares/ensureAuthenticated";
import { ReceivedComplimentsService } from "../services/ReceivedComplimentsService";


class ReceivedComplimentsController {

    async handle(request: Request, response: Response) {
        const receivedComplimentsService = new ReceivedComplimentsService();
        const compliments = await receivedComplimentsService.execute(CurrentUser);

        return response.json(compliments);
    }
}

export { ReceivedComplimentsController };