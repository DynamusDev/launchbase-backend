"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Location_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChecklistFuel_1 = __importDefault(require("./ChecklistFuel"));
const Event_1 = __importDefault(require("./Event"));
let Location = Location_1 = class Location {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Location.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Location.prototype, "icao", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Location.prototype, "airport", void 0);
__decorate([
    typeorm_1.Column({ type: 'real' }),
    __metadata("design:type", Number)
], Location.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column({ type: 'real' }),
    __metadata("design:type", Number)
], Location.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Location.prototype, "city", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Location.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Location.prototype, "image", void 0);
__decorate([
    typeorm_1.OneToMany(type => ChecklistFuel_1.default, location => Location_1),
    __metadata("design:type", Array)
], Location.prototype, "fuel_checklist", void 0);
__decorate([
    typeorm_1.OneToMany(() => Event_1.default, location => location.location),
    __metadata("design:type", Array)
], Location.prototype, "events", void 0);
Location = Location_1 = __decorate([
    typeorm_1.Entity('locations')
], Location);
exports.default = Location;
