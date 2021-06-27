import { EntityRepository, Repository } from "typeorm";
import { user } from "../entities/user";

@EntityRepository(user)
class UsersRepositories extends Repository<user> {

}

export { UsersRepositories };