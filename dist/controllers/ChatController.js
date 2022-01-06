"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Chat_1 = __importDefault(require("../models/Chat"));
const User_1 = __importDefault(require("../models/User"));
const chat_view_1 = require("../views/chat_view");
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Chat']
        // #swagger.description = 'Endpoint para enviar mensagens.'
        /* #swagger.parameters['Authorization'] = {
                  in: 'header',
                  required: true,
                  description: 'Chave da api',
                  type: 'string',
        } */
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do usuário',
                  type: 'object',
                  schema: { $ref: "#/definitions/ChatTemplate" },
        } */
        const { message, type, author, room } = request.body;
        const data = {
            room,
            message,
            datetime: `${Date.now()}`,
            type,
            author,
        };
        const chatRepository = typeorm_1.getRepository(Chat_1.default);
        const userRepository = typeorm_1.getRepository(User_1.default);
        const chat = chatRepository.create(data);
        const auth = await userRepository.find({
            where: { id: author },
        });
        await chatRepository.save(chat);
        const socketData = {
            id: Math.random(),
            room,
            datetime: Date.now(),
            message,
            type,
            author: auth[0],
        };
        request.socket.emit(room, socketData);
        /* #swagger.responses[201] = {
                  schema: { $ref: "#/definitions/Chat" }
          } */
        return response.status(201).json({
            status: 201,
            message: "Succesfuly",
            chat: chat_view_1.chatRender(chat),
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Chat']
        // #swagger.description = 'Endpoint para listar as mensagens.'
        /* #swagger.parameters['Authorization'] = {
                  in: 'header',
                  required: true,
                  description: 'Chave da api',
                  type: 'string',
        } */
        const { room } = request.params;
        const chatRepository = typeorm_1.getRepository(Chat_1.default);
        const chat = await chatRepository.find({ where: { room: room } });
        /* #swagger.responses[201] = {
                  schema: { $ref: "#/definitions/Chat" }
          } */
        return response.status(200).json({
            status: 200,
            message: "Succesfuly",
            chat: chat_view_1.chatRenderMany(chat),
        });
    },
};
