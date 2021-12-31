"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checklistFuelTable1605564471953 = void 0;
class checklistFuelTable1605564471953 {
    constructor() {
        this.name = 'checklistFuelTable1605564471953';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "fuel_checklist" ("id" SERIAL NOT NULL, "prefix" character varying NOT NULL, "model" character varying NOT NULL, "truck_board" character varying NOT NULL, "amount" real NOT NULL, "odometer_photo" text NOT NULL, "weight_fuel_supplied" real NOT NULL, "date" character varying NOT NULL, "time" character varying NOT NULL, "fuelTypeId" integer, "userIdId" integer, "locationId" integer, CONSTRAINT "PK_bf3544cab82653b81290bb695d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_89f358bbb02bf6d1025ca2736cc" FOREIGN KEY ("fuelTypeId") REFERENCES "fuel_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_4d90c03d7e92151325fbdb7c046" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_492807813c467144b93253e7640" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_492807813c467144b93253e7640"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_4d90c03d7e92151325fbdb7c046"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_89f358bbb02bf6d1025ca2736cc"`);
        await queryRunner.query(`DROP TABLE "fuel_checklist"`);
    }
}
exports.checklistFuelTable1605564471953 = checklistFuelTable1605564471953;
