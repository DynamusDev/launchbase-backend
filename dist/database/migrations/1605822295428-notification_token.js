"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationToken1605822295428 = void 0;
class notificationToken1605822295428 {
    constructor() {
        this.name = 'notificationToken1605822295428';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "token_notification" text`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "token_notification"`);
    }
}
exports.notificationToken1605822295428 = notificationToken1605822295428;
