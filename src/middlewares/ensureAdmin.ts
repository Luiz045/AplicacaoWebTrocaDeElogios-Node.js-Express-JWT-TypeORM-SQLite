import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { CurrentUser } from "./ensureAuthenticated";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const UserRepository = getCustomRepository(UsersRepositories);
    const { admin } = await UserRepository.findOne(CurrentUser)
    if (admin) {
        next();
    }
    else {
        return response.status(401).end();
    }
}