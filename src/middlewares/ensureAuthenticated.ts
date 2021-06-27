import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

var CurrentUser = null;
export { CurrentUser };

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, Token] = authToken.split(" ");

    try {
        const encode = verify(Token, "78a4c9cdd1f6f58468df4dcb96becfa0")
        CurrentUser = encode["sub"];

        next();

    } catch {
        return response.status(401).end();
    }

}