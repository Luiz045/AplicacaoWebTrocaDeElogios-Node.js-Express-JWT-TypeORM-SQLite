import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthenticateRequest {
    email: string;
    password: string
}


class AuthenticateUserService {

    async execute({ email, password }: AuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);
        const user = await usersRepository.findOne({
            email
        });

        if (!user) {
            throw new Error("E-mail ou senha incorretos.");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("E-mail ou senha incorretos.");
        }

        const token = sign({ email: user.email }, "78a4c9cdd1f6f58468df4dcb96becfa0", { subject: user.id, expiresIn: "1d" });

        return token;
    }
}

export { AuthenticateUserService };