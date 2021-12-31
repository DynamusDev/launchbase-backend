"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.correctionChat1634165341998 = void 0;
class correctionChat1634165341998 {
    constructor() {
        this.name = 'correctionChat1634165341998';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "datetime" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "datetime"`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "date" character varying NOT NULL`);
    }
}
exports.correctionChat1634165341998 = correctionChat1634165341998;
