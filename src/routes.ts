import express from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import ChatController from "./controllers/ChatController";
import UploadController from "./controllers/UploadController";
import { verifyJWT } from "./config/apiAuth";

export const routes = express.Router();
const upload = multer(uploadConfig);

routes.patch("/sessions", SessionController.create); //Criar Sessão(LOGIN)
routes.patch("/forgot_password", SessionController.forgotPassword); //Esqueci minha senha

routes.post("/chat", ChatController.create); // Enviar mensagem
routes.get("/chat/:room", ChatController.index); // Carregas mensagens do chat

routes.post("/users", UserController.create); // Criar usuário
routes.patch("/users/:id", UserController.edit); // editar com senha
routes.get("/users", UserController.index); // Listar Usuários
routes.get("/users/:id", UserController.especific);
routes.delete("/users/delete/:id", UserController.delete); // editar

routes.post("/upload", upload.single("image"), UploadController.create);
