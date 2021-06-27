import { EntityRepository, Repository } from "typeorm";
import { compliment } from "../entities/compliment";

@EntityRepository(compliment)
class ComplimentsRepositories extends Repository<compliment> {

}

export { ComplimentsRepositories };