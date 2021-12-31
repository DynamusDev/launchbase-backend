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
var Event_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
const Location_1 = __importDefault(require("./Location"));
const EventType_1 = __importDefault(require("./EventType"));
const Task_1 = __importDefault(require("./Task"));
let Event = Event_1 = class Event {
};
__decorate([
    typeorm_1.Column({ type: "varchar", primary: true }),
    __metadata("design:type", String)
], Event.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1.default, (events) => Event_1, {
        eager: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", User_1.default)
], Event.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "time", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => EventType_1.default, (event) => Event_1, {
        eager: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", EventType_1.default)
], Event.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "prefix", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1.default, (event) => Event_1, {
        eager: true,
        nullable: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", User_1.default)
], Event.prototype, "updatedBy", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "cabeceira_dePouso", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "modelo_aeronave", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "numero_passageiros", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "tipo_deCarga", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Location_1.default, (location) => location.events, {
        eager: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Location_1.default)
], Event.prototype, "location", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Event.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Task_1.default, (task) => task.id, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Event.prototype, "tasks", void 0);
Event = Event_1 = __decorate([
    typeorm_1.Entity("event")
], Event);
exports.default = Event;
