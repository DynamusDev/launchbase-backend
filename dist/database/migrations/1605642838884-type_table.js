"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeTable1605642838884 = void 0;
class typeTable1605642838884 {
    constructor() {
        this.name = 'typeTable1605642838884';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types_tasks_tasks" ("typesId" integer NOT NULL, "tasksId" integer NOT NULL, CONSTRAINT "PK_c4c6f01aa1256ca207a508e61d4" PRIMARY KEY ("typesId", "tasksId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_38926d92d307dbaf9f36db499a" ON "types_tasks_tasks" ("typesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_548ea2ba2ee0acf953a401f293" ON "types_tasks_tasks" ("tasksId") `);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" ADD CONSTRAINT "FK_38926d92d307dbaf9f36db499a3" FOREIGN KEY ("typesId") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" ADD CONSTRAINT "FK_548ea2ba2ee0acf953a401f293b" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" DROP CONSTRAINT "FK_548ea2ba2ee0acf953a401f293b"`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" DROP CONSTRAINT "FK_38926d92d307dbaf9f36db499a3"`);
        await queryRunner.query(`DROP INDEX "IDX_548ea2ba2ee0acf953a401f293"`);
        await queryRunner.query(`DROP INDEX "IDX_38926d92d307dbaf9f36db499a"`);
        await queryRunner.query(`DROP TABLE "types_tasks_tasks"`);
        await queryRunner.query(`DROP TABLE "types"`);
    }
}
exports.typeTable1605642838884 = typeTable1605642838884;
