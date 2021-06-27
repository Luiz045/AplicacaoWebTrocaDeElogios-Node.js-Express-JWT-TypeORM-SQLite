import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { tag } from "./tags";
import { user } from "./user";

@Entity("compliments")
class compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => user)
    UserSender: user;

    @Column()
    user_receiver: string;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => user)
    UserReceiver: user;

    @Column()
    tag_id: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => tag)
    tag: tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { compliment };