import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { CurrentUser } from "../middlewares/ensureAuthenticated"

interface ComplimentRequest {
    tag_id: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute({ tag_id, user_receiver, message }: ComplimentRequest) {
        const ComplimentsRepository = getCustomRepository(ComplimentsRepositories);
        const UserRepository = getCustomRepository(UsersRepositories);
        const TagsRepository = getCustomRepository(TagsRepositories);

        if (CurrentUser == user_receiver) {
            throw new Error("Elogios para si mesmo não são permitidos");

        }
        const UserReceiverExists = await UserRepository.findOne(user_receiver);
        const TagExists = await TagsRepository.findOne(tag_id);

        if (!TagExists) {
            throw new Error("Tag não existe");
        }

        if (!UserReceiverExists) {
            throw new Error("Usuário de destino não existe");

        }


        const compliment = ComplimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender: CurrentUser,
            message
        });

        await ComplimentsRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };