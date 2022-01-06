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
const SessionController_1 = __importDefault(require("./controllers/SessionController"));
const ChatController_1 = __importDefault(require("./controllers/ChatController"));
const UploadController_1 = __importDefault(require("./controllers/UploadController"));
const apiAuth_1 = require("./config/apiAuth");
exports.routes = express_1.default.Router();
const upload = multer_1.default(upload_1.default);
exports.routes.patch("/sessions", SessionController_1.default.create); //Criar Sessão(LOGIN)
exports.routes.patch("/forgot_password", SessionController_1.default.forgotPassword); //Esqueci minha senha
exports.routes.post("/chat", apiAuth_1.verifyJWT, ChatController_1.default.create); // Enviar mensagem
exports.routes.get("/chat/:room", apiAuth_1.verifyJWT, ChatController_1.default.index); // Carregas mensagens do chat
exports.routes.post("/users", UserController_1.default.create); // Criar usuário
exports.routes.patch("/users/:id", apiAuth_1.verifyJWT, apiAuth_1.verifyJWT, UserController_1.default.edit); // editar com senha
exports.routes.get("/users", apiAuth_1.verifyJWT, UserController_1.default.index); // Listar Usuários
exports.routes.get("/users/:id", apiAuth_1.verifyJWT, UserController_1.default.especific);
exports.routes.delete("/users/delete/:id", apiAuth_1.verifyJWT, UserController_1.default.delete); // editar
exports.routes.post("/upload", apiAuth_1.verifyJWT, upload.single("image"), UploadController_1.default.create);
