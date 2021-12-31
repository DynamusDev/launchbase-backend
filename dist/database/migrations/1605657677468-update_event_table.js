"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEventTable1605657677468 = void 0;
class updateEventTable1605657677468 {
    constructor() {
        this.name = 'updateEventTable1605657677468';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_255cc0faa667931c91431716165"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_255cc0faa667931c91431716165" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_255cc0faa667931c91431716165"`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_255cc0faa667931c91431716165" FOREIGN KEY ("typeId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.updateEventTable1605657677468 = updateEventTable1605657677468;
