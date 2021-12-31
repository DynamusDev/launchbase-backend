import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1640980379194 implements MigrationInterface {
    name = 'tables1640980379194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "authorId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "messagesId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d1a550279c14c1c72469b551481" FOREIGN KEY ("messagesId") REFERENCES "messages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d1a550279c14c1c72469b551481"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "messagesId"`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

}
