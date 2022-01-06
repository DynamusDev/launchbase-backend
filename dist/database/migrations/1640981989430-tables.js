"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tables1640981989430 = void 0;
class tables1640981989430 {
    constructor() {
        this.name = 'tables1640981989430';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "image" text, "token_notification" text, "createdAt" date, "updatedAt" date, "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "messages" ("id" SERIAL NOT NULL, "room" character varying NOT NULL, "datetime" character varying, "message" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "messages"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.tables1640981989430 = tables1640981989430;
