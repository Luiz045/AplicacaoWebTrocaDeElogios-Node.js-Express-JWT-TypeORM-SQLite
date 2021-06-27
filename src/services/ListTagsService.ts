import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagsService {
    async execute() {
        const TagsRepository = getCustomRepository(TagsRepositories)
        const Tags = TagsRepository.find();

        return Tags;
    }
}

export { ListTagsService }