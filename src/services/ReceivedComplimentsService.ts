import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ReceivedComplimentsService {
    async execute(user_id: string) {
        const ComplimentsRepository = getCustomRepository(ComplimentsRepositories)
        const compliments = ComplimentsRepository.find({
            where: {
                user_receiver: user_id
            }
        });

        return compliments;
    }
}

export { ReceivedComplimentsService }