"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTables1605555800926 = void 0;
class createTables1605555800926 {
    constructor() {
        this.name = 'createTables1605555800926';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "fuel_type" ("id" SERIAL NOT NULL, "fuel" character varying NOT NULL, "densit" real NOT NULL, CONSTRAINT "PK_546a28980794b5335ca804e76d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locations" ("id" SERIAL NOT NULL, "icao" character varying NOT NULL, "airport" character varying NOT NULL, "latitude" real NOT NULL, "longitude" real NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "image" text, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "profile" character varying NOT NULL, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "telephone_number" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "master" boolean NOT NULL, "keyResponder" boolean NOT NULL, "image" text, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_position_profiles" ("usersId" integer NOT NULL, "profilesId" integer NOT NULL, CONSTRAINT "PK_cd1dd5bfc3d450dd54c504aecfc" PRIMARY KEY ("usersId", "profilesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_878d5c8ffb846935a59bab0821" ON "users_position_profiles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_939496f20b69baf660fca88666" ON "users_position_profiles" ("profilesId") `);
        await queryRunner.query(`CREATE TABLE "users_locations_locations" ("usersId" integer NOT NULL, "locationsId" integer NOT NULL, CONSTRAINT "PK_e07dd72fc74389ef40a1d480eba" PRIMARY KEY ("usersId", "locationsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cf864e9734410a10da72f9a2c3" ON "users_locations_locations" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4e3ad2b2b34e7e83424e9e7298" ON "users_locations_locations" ("locationsId") `);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" ADD CONSTRAINT "FK_878d5c8ffb846935a59bab08219" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" ADD CONSTRAINT "FK_939496f20b69baf660fca886660" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" ADD CONSTRAINT "FK_cf864e9734410a10da72f9a2c3f" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" ADD CONSTRAINT "FK_4e3ad2b2b34e7e83424e9e72984" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users_locations_locations" DROP CONSTRAINT "FK_4e3ad2b2b34e7e83424e9e72984"`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" DROP CONSTRAINT "FK_cf864e9734410a10da72f9a2c3f"`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" DROP CONSTRAINT "FK_939496f20b69baf660fca886660"`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" DROP CONSTRAINT "FK_878d5c8ffb846935a59bab08219"`);
        await queryRunner.query(`DROP INDEX "IDX_4e3ad2b2b34e7e83424e9e7298"`);
        await queryRunner.query(`DROP INDEX "IDX_cf864e9734410a10da72f9a2c3"`);
        await queryRunner.query(`DROP TABLE "users_locations_locations"`);
        await queryRunner.query(`DROP INDEX "IDX_939496f20b69baf660fca88666"`);
        await queryRunner.query(`DROP INDEX "IDX_878d5c8ffb846935a59bab0821"`);
        await queryRunner.query(`DROP TABLE "users_position_profiles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "locations"`);
        await queryRunner.query(`DROP TABLE "fuel_type"`);
    }
}
exports.createTables1605555800926 = createTables1605555800926;
