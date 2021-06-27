import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class SendComplimentsService {
    async execute(user_id: string) {
        const ComplimentsRepository = getCustomRepository(ComplimentsRepositories)
        const compliments = ComplimentsRepository.find({
            where: {
                user_sender: user_id
            },
            //relations: ["UserSender", "UserReceiver", "tag"]
        });

        return compliments;
    }
}

export { SendComplimentsService }