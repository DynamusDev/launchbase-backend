"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventTable1605649739249 = void 0;
class eventTable1605649739249 {
    constructor() {
        this.name = 'eventTable1605649739249';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "date" character varying NOT NULL, "time" character varying NOT NULL, "prefix" character varying, "description" character varying NOT NULL, "status" character varying NOT NULL, "cabeceira_dePouso" character varying, "modelo_aeronave" character varying, "numero_passageiros" character varying, "tipo_deCarga" character varying, "category" character varying NOT NULL, "userId" integer, "typeId" integer, "updatedById" integer, "localId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event_tasks_tasks" ("eventId" character varying NOT NULL, "tasksId" integer NOT NULL, CONSTRAINT "PK_f91b907c238db01a67ed49349da" PRIMARY KEY ("eventId", "tasksId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4e3e0964a4668c48a76b5baffb" ON "event_tasks_tasks" ("eventId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f6f6ed9751ad129e9213e8699" ON "event_tasks_tasks" ("tasksId") `);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_255cc0faa667931c91431716165" FOREIGN KEY ("typeId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_ebd5032c5bc4ca401d847db089a" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_7b6a71adcd20b2f76afe783b7a6" FOREIGN KEY ("localId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" ADD CONSTRAINT "FK_4e3e0964a4668c48a76b5baffb2" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" ADD CONSTRAINT "FK_8f6f6ed9751ad129e9213e8699e" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" DROP CONSTRAINT "FK_8f6f6ed9751ad129e9213e8699e"`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" DROP CONSTRAINT "FK_4e3e0964a4668c48a76b5baffb2"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_7b6a71adcd20b2f76afe783b7a6"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_ebd5032c5bc4ca401d847db089a"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_255cc0faa667931c91431716165"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_01cd2b829e0263917bf570cb672"`);
        await queryRunner.query(`DROP INDEX "IDX_8f6f6ed9751ad129e9213e8699"`);
        await queryRunner.query(`DROP INDEX "IDX_4e3e0964a4668c48a76b5baffb"`);
        await queryRunner.query(`DROP TABLE "event_tasks_tasks"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }
}
exports.eventTable1605649739249 = eventTable1605649739249;
