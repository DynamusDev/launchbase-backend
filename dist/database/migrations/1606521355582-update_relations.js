"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelations1606521355582 = void 0;
class updateRelations1606521355582 {
    constructor() {
        this.name = 'updateRelations1606521355582';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_4d90c03d7e92151325fbdb7c046"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_492807813c467144b93253e7640"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_89f358bbb02bf6d1025ca2736cc"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_ebd5032c5bc4ca401d847db089a"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_01cd2b829e0263917bf570cb672"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_255cc0faa667931c91431716165"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_7b6a71adcd20b2f76afe783b7a6"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f"`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" DROP CONSTRAINT "FK_e6f29418bd30934d35b9eef81f2"`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" DROP CONSTRAINT "FK_daef7f42e56a8d897b24cfdc38d"`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" DROP CONSTRAINT "FK_548ea2ba2ee0acf953a401f293b"`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" DROP CONSTRAINT "FK_38926d92d307dbaf9f36db499a3"`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" DROP CONSTRAINT "FK_8f6f6ed9751ad129e9213e8699e"`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" DROP CONSTRAINT "FK_4e3e0964a4668c48a76b5baffb2"`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" DROP CONSTRAINT "FK_878d5c8ffb846935a59bab08219"`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" DROP CONSTRAINT "FK_939496f20b69baf660fca886660"`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" DROP CONSTRAINT "FK_cf864e9734410a10da72f9a2c3f"`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" DROP CONSTRAINT "FK_4e3ad2b2b34e7e83424e9e72984"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_89f358bbb02bf6d1025ca2736cc" FOREIGN KEY ("fuelTypeId") REFERENCES "fuel_type"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_4d90c03d7e92151325fbdb7c046" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_492807813c467144b93253e7640" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_255cc0faa667931c91431716165" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_ebd5032c5bc4ca401d847db089a" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_7b6a71adcd20b2f76afe783b7a6" FOREIGN KEY ("localId") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" ADD CONSTRAINT "FK_e6f29418bd30934d35b9eef81f2" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" ADD CONSTRAINT "FK_daef7f42e56a8d897b24cfdc38d" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" ADD CONSTRAINT "FK_38926d92d307dbaf9f36db499a3" FOREIGN KEY ("typesId") REFERENCES "types"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" ADD CONSTRAINT "FK_548ea2ba2ee0acf953a401f293b" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" ADD CONSTRAINT "FK_4e3e0964a4668c48a76b5baffb2" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" ADD CONSTRAINT "FK_8f6f6ed9751ad129e9213e8699e" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" ADD CONSTRAINT "FK_878d5c8ffb846935a59bab08219" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" ADD CONSTRAINT "FK_939496f20b69baf660fca886660" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" ADD CONSTRAINT "FK_cf864e9734410a10da72f9a2c3f" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" ADD CONSTRAINT "FK_4e3ad2b2b34e7e83424e9e72984" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users_locations_locations" DROP CONSTRAINT "FK_4e3ad2b2b34e7e83424e9e72984"`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" DROP CONSTRAINT "FK_cf864e9734410a10da72f9a2c3f"`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" DROP CONSTRAINT "FK_939496f20b69baf660fca886660"`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" DROP CONSTRAINT "FK_878d5c8ffb846935a59bab08219"`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" DROP CONSTRAINT "FK_8f6f6ed9751ad129e9213e8699e"`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" DROP CONSTRAINT "FK_4e3e0964a4668c48a76b5baffb2"`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" DROP CONSTRAINT "FK_548ea2ba2ee0acf953a401f293b"`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" DROP CONSTRAINT "FK_38926d92d307dbaf9f36db499a3"`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" DROP CONSTRAINT "FK_daef7f42e56a8d897b24cfdc38d"`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" DROP CONSTRAINT "FK_e6f29418bd30934d35b9eef81f2"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_7b6a71adcd20b2f76afe783b7a6"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_ebd5032c5bc4ca401d847db089a"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_255cc0faa667931c91431716165"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_01cd2b829e0263917bf570cb672"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_492807813c467144b93253e7640"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_4d90c03d7e92151325fbdb7c046"`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" DROP CONSTRAINT "FK_89f358bbb02bf6d1025ca2736cc"`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" ADD CONSTRAINT "FK_4e3ad2b2b34e7e83424e9e72984" FOREIGN KEY ("locationsId") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_locations_locations" ADD CONSTRAINT "FK_cf864e9734410a10da72f9a2c3f" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" ADD CONSTRAINT "FK_939496f20b69baf660fca886660" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_position_profiles" ADD CONSTRAINT "FK_878d5c8ffb846935a59bab08219" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" ADD CONSTRAINT "FK_4e3e0964a4668c48a76b5baffb2" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_tasks_tasks" ADD CONSTRAINT "FK_8f6f6ed9751ad129e9213e8699e" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" ADD CONSTRAINT "FK_38926d92d307dbaf9f36db499a3" FOREIGN KEY ("typesId") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "types_tasks_tasks" ADD CONSTRAINT "FK_548ea2ba2ee0acf953a401f293b" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" ADD CONSTRAINT "FK_daef7f42e56a8d897b24cfdc38d" FOREIGN KEY ("profilesId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks_responsible_profiles" ADD CONSTRAINT "FK_e6f29418bd30934d35b9eef81f2" FOREIGN KEY ("tasksId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_819e6bb0ee78baf73c398dc707f" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_7b6a71adcd20b2f76afe783b7a6" FOREIGN KEY ("localId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_255cc0faa667931c91431716165" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_01cd2b829e0263917bf570cb672" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_ebd5032c5bc4ca401d847db089a" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_89f358bbb02bf6d1025ca2736cc" FOREIGN KEY ("fuelTypeId") REFERENCES "fuel_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_492807813c467144b93253e7640" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fuel_checklist" ADD CONSTRAINT "FK_4d90c03d7e92151325fbdb7c046" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.updateRelations1606521355582 = updateRelations1606521355582;
