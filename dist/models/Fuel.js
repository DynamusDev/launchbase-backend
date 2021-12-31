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
var Fuel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChecklistFuel_1 = __importDefault(require("./ChecklistFuel"));
let Fuel = Fuel_1 = class Fuel {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Fuel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Fuel.prototype, "fuel", void 0);
__decorate([
    typeorm_1.Column({ type: 'real' }),
    __metadata("design:type", Number)
], Fuel.prototype, "densit", void 0);
__decorate([
    typeorm_1.OneToMany(type => ChecklistFuel_1.default, fuel_type => Fuel_1),
    __metadata("design:type", Array)
], Fuel.prototype, "checklists", void 0);
Fuel = Fuel_1 = __decorate([
    typeorm_1.Entity('fuel_type')
], Fuel);
exports.default = Fuel;
