"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatTable1605658845020 = void 0;
class chatTable1605658845020 {
    constructor() {
        this.name = 'chatTable1605658845020';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "messages" ("id" SERIAL NOT NULL, "room" character varying NOT NULL, "date" character varying NOT NULL, "time" character varying NOT NULL, "message" character varying NOT NULL, "type" character varying NOT NULL, "authorId" integer, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }
}
exports.chatTable1605658845020 = chatTable1605658845020;
