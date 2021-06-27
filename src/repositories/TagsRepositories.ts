import { EntityRepository, Repository } from "typeorm";
import { tag } from "../entities/tags";

@EntityRepository(tag)
class TagsRepositories extends Repository<tag> {

}

export { TagsRepositories };