import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const usuario = await createUserService.execute({ name, email, admin, password });

        return response.json(usuario);
    }
}

export { CreateUserController };