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
var FuelChecklist_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
const Location_1 = __importDefault(require("./Location"));
const Fuel_1 = __importDefault(require("./Fuel"));
let FuelChecklist = FuelChecklist_1 = class FuelChecklist {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], FuelChecklist.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], FuelChecklist.prototype, "prefix", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], FuelChecklist.prototype, "model", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], FuelChecklist.prototype, "truck_board", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Fuel_1.default, checklists => FuelChecklist_1, { eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Fuel_1.default)
], FuelChecklist.prototype, "fuel_type", void 0);
__decorate([
    typeorm_1.Column({ type: 'real' }),
    __metadata("design:type", Number)
], FuelChecklist.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], FuelChecklist.prototype, "odometer_photo", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.default, fuel_checklists => FuelChecklist_1, { eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", User_1.default)
], FuelChecklist.prototype, "user_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Location_1.default, fuel_checklists => FuelChecklist_1, { eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Location_1.default)
], FuelChecklist.prototype, "location", void 0);
__decorate([
    typeorm_1.Column({ type: 'real' }),
    __metadata("design:type", Number)
], FuelChecklist.prototype, "weight_fuel_supplied", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], FuelChecklist.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], FuelChecklist.prototype, "time", void 0);
FuelChecklist = FuelChecklist_1 = __decorate([
    typeorm_1.Entity('fuel_checklist')
], FuelChecklist);
exports.default = FuelChecklist;
