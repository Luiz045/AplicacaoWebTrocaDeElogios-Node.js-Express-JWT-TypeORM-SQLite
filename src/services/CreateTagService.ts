import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name: string) {
        const tagRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Nome incorreto");

        }
        const tagAlreadyExists = await tagRepository.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error("Tag já cadastrada");

        }

        const tag = tagRepository.create({
            name
        });

        await tagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService };