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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Task_1 = __importDefault(require("./Task"));
const Event_1 = __importDefault(require("./Event"));
const Category_1 = __importDefault(require("./Category"));
let Type = class Type {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Type.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Type.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Category_1.default, category => category.types, { onDelete: 'SET NULL', onUpdate: 'CASCADE', eager: true }),
    __metadata("design:type", Category_1.default)
], Type.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Task_1.default, task => Task_1.default, { eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Type.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(() => Event_1.default, event => event.type, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Type.prototype, "events", void 0);
Type = __decorate([
    typeorm_1.Entity('types')
], Type);
exports.default = Type;
