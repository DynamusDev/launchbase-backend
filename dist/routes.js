"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("./config/upload"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const EventController_1 = __importDefault(require("./controllers/EventController"));
const SessionController_1 = __importDefault(require("./controllers/SessionController"));
const TypeController_1 = __importDefault(require("./controllers/TypeController"));
const CategoryController_1 = __importDefault(require("./controllers/CategoryController"));
// const ScheduleController = require('./controllers/ScheduleController');
const ChatController_1 = __importDefault(require("./controllers/ChatController"));
const LocationController_1 = __importDefault(require("./controllers/LocationController"));
const ProfileController_1 = __importDefault(require("./controllers/ProfileController"));
const TaskController_1 = __importDefault(require("./controllers/TaskController"));
const FuelController_1 = __importDefault(require("./controllers/FuelController"));
const FuelChecklistController_1 = __importDefault(require("./controllers/FuelChecklistController"));
const UploadController_1 = __importDefault(require("./controllers/UploadController"));
exports.routes = express_1.default.Router();
const upload = multer_1.default(upload_1.default);
exports.routes.patch("/sessions", SessionController_1.default.create); //Criar Sessão(LOGIN)
exports.routes.patch("/forgot_password", SessionController_1.default.forgotPassword); //Esqueci minha senha
exports.routes.post("/category", CategoryController_1.default.create); // Criar categorias
exports.routes.patch("/category/:id", CategoryController_1.default.edit); // Editar categorias
exports.routes.delete("/category/:id", CategoryController_1.default.delete); // Deletar categorias
exports.routes.get("/category", CategoryController_1.default.index); // Editar categorias
exports.routes.post("/types", TypeController_1.default.create); // Criar tipos de ocorrência
exports.routes.get("/types", TypeController_1.default.index); // Listar tipos de ocorrência
exports.routes.delete("/types/:id", TypeController_1.default.delete); // Deletar tipos de ocorrência
exports.routes.post("/location", LocationController_1.default.create); // Criar location
exports.routes.get("/location", LocationController_1.default.index); // Listar locations
exports.routes.delete("/location/:id", LocationController_1.default.delete); // Deletar location
exports.routes.patch("/location/:id", LocationController_1.default.edit); // Deletar location
exports.routes.post("/chat", ChatController_1.default.create); // Enviar mensagem
exports.routes.get("/chat/:room", ChatController_1.default.index); // Carregas mensagens do chat
exports.routes.post("/profiles", ProfileController_1.default.create); // Criar perfil
exports.routes.patch("/profiles/:id", ProfileController_1.default.edit); // Editar perfil
exports.routes.get("/profiles", ProfileController_1.default.index); // Listar perfis
exports.routes.post("/tasks", TaskController_1.default.create); // Criar task
exports.routes.patch("/tasks/:id", TaskController_1.default.edit); // Editar task
exports.routes.get("/tasks", TaskController_1.default.index); // Listar task
exports.routes.delete("/tasks/:id", TaskController_1.default.delete); // Deletar task
exports.routes.post("/users", UserController_1.default.create); // Criar usuário
exports.routes.patch("/users/:id", UserController_1.default.edit); // editar com senha
exports.routes.get("/users", UserController_1.default.index); // Listar Usuários
exports.routes.get("/users/:id", UserController_1.default.especific);
exports.routes.delete("/users/delete/:id", UserController_1.default.delete); // editar
exports.routes.post("/events", EventController_1.default.create); // Criar events
exports.routes.patch("/events/:id", EventController_1.default.edit); // Atualizar events
exports.routes.get("/events/:location", EventController_1.default.index); // Listar events
// routes.post('/schedule', ScheduleController.create); // Criar schedule
// routes.get('/schedule', ScheduleController.index); // Listar schedule
// routes.get('/schedule/:id', ScheduleController.especific);
// routes.delete('/schedule', ScheduleController.delete); // Deletar schedule
exports.routes.post("/checklist/fuel", FuelChecklistController_1.default.create); // Criar checklist de abastecimento
exports.routes.get("/checklist/fuel", FuelChecklistController_1.default.index); // Listar abastecimentos
exports.routes.post("/fuel", FuelController_1.default.create); // Criar Fuel
exports.routes.get("/fuel", FuelController_1.default.index); // Listar Fuels
// routes.delete('/fuel/:id', FuelController.delete); // Deletar Fuel
exports.routes.patch("/fuel/:id", FuelController_1.default.edit); // Deletar Fuel
// routes.get('/fuel/:id', FuelController.especific); // Detalhar fuel específico
exports.routes.post("/upload", upload.single("image"), UploadController_1.default.create);
