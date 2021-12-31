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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Location_1 = __importDefault(require("./Location"));
const Profile_1 = __importDefault(require("./Profile"));
const ChecklistFuel_1 = __importDefault(require("./ChecklistFuel"));
const Event_1 = __importDefault(require("./Event"));
const Chat_1 = __importDefault(require("./Chat"));
let User = User_1 = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Profile_1.default, profile => profile.id, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], User.prototype, "position", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "telephone_number", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], User.prototype, "master", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], User.prototype, "keyResponder", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Location_1.default, locate => locate.id, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], User.prototype, "locations", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    typeorm_1.OneToMany(type => ChecklistFuel_1.default, user_id => User_1, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "fuel_checklists", void 0);
__decorate([
    typeorm_1.OneToMany(type => Event_1.default, user => User_1),
    __metadata("design:type", Array)
], User.prototype, "events", void 0);
__decorate([
    typeorm_1.OneToMany(type => Event_1.default, updatedBy => User_1),
    __metadata("design:type", Array)
], User.prototype, "updates", void 0);
__decorate([
    typeorm_1.OneToMany(type => Chat_1.default, author => User_1),
    __metadata("design:type", Array)
], User.prototype, "messages", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], User.prototype, "token_notification", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'boolean' }),
    __metadata("design:type", Boolean)
], User.prototype, "starthos_user", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
User = User_1 = __decorate([
    typeorm_1.Entity('users')
], User);
exports.default = User;
