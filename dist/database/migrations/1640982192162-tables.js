"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tables1640982192162 = void 0;
class tables1640982192162 {
    constructor() {
        this.name = 'tables1640982192162';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "messages" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "authorId"`);
    }
}
exports.tables1640982192162 = tables1640982192162;
