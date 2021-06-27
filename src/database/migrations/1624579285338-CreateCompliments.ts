import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624579285338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true

                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderComplits",
                        columnNames: ["user_sender"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "set null",
                        onUpdate: "set null"
                    },
                    {
                        name: "FKUserReceiverComplits",
                        columnNames: ["user_receiver"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "set null",
                        onUpdate: "set null"
                    },
                    {
                        name: "FKTagComplits",
                        columnNames: ["tag_id"],
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        onDelete: "set null",
                        onUpdate: "set null"
                    }
                ]
            })
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
