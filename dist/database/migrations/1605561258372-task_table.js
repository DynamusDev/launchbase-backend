"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskTable1605561258372 = void 0;
class taskTable1605561258372 {
    constructor() {
        this.name = 'taskTable1605561258372';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "task" character varying NOT NULL, "phone" character varying NOT NULL, "backup_phone" character varying NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks_responsible_profiles" ("tasksId" integer NOT NULL, "profilesId" integer NOT NULL, CONSTRAINT "PK_bc58fa975dbe087c5a6d24c8d03" PRIMARY KEY ("tasksId", "profilesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e6f29418bd30934d35b9eef81f" ON "tasks_responsible_profiles" ("tasksId") `);
        await queryRunner.query(`CREATE INDEX "IDX_daef7f42e56a8d897b24cfdc38" ON "tasks_responsible_profiles" ("profilesId") `);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" ADD CONSTRAINT "FK_e6f29418bd30934d35b9eef81f2" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" ADD CONSTRAINT "FK_daef7f42e56a8d897b24cfdc38d" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" DROP CONSTRAINT "FK_daef7f42e56a8d897b24cfdc38d"`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" DROP CONSTRAINT "FK_e6f29418bd30934d35b9eef81f2"`);
        await queryRunner.query(`DROP INDEX "IDX_daef7f42e56a8d897b24cfdc38"`);
        await queryRunner.query(`DROP INDEX "IDX_e6f29418bd30934d35b9eef81f"`);
        await queryRunner.query(`DROP TABLE "tasks_responsible_profiles"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
    }
}
exports.taskTable1605561258372 = taskTable1605561258372;
