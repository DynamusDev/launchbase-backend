"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Chat_1 = __importDefault(require("../models/Chat"));
const Event_1 = __importDefault(require("../models/Event"));
const crypto_1 = __importDefault(require("crypto"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para criar os eventos.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do usuário',
                  type: 'object',
                  schema: { $ref: "#/definitions/EventTemplate" },
        } */
        const chatRepository = typeorm_1.getRepository(Chat_1.default);
        const { date, time, type, prefix, description, status, user, cabeceira_dePouso, modelo_aeronave, numero_passageiros, tipo_deCarga, location, category, tasks, } = request.body;
        const eventRepository = typeorm_1.getRepository(Event_1.default);
        const now = Date.now();
        const id = "PRE_" + crypto_1.default.randomBytes(2).toString("hex");
        const data = {
            id,
            date,
            time,
            type,
            prefix,
            description,
            status,
            user,
            cabeceira_dePouso,
            modelo_aeronave,
            numero_passageiros,
            tipo_deCarga,
            location: location.id,
            category,
            tasks,
        };
        const event = eventRepository.create(data);
        const message = chatRepository.create({
            author: 2,
            datetime: now,
            id: 1,
            message: `Olá, bem vindo à sala de crise ${id}, este é o início desta conversa. As mensagens enviadas aqui serão gravadas na nossa base de dados e não poderão ser apagadas. O checklist para esta ocorrência estão localizadas no botão direito do header junto com os detalhes desta ocorrência`,
            type: "text",
            room: `${id}`,
        });
        request.socket.emit(location.id, "news");
        await eventRepository.save(event);
        await chatRepository.save(message);
        /* #swagger.responses[201] = {
                  schema: { $ref: "#/definitions/Chat" },
          } */
        return response.status(201).json({
            status: 201,
            message: "Succesfuly",
            event: event,
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para listar os eventos.'
        const { location } = request.params;
        const eventRepository = typeorm_1.getRepository(Event_1.default);
        const events = await eventRepository.find({
            where: { location },
            relations: ["tasks"],
        });
        /* #swagger.responses[201] = {
        schema: { $ref: "#/definitions/Chat" },
        } */
        return response.status(200).json({
            status: 200,
            message: "Succesfuly",
            events: events,
        });
    },
    async edit(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para mudar o estado do evento.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Atualizar evento',
                  type: 'object',
                  schema: { $ref: "#/definitions/EditEventTemplate" },
        } */
        const { id } = request.params;
        const { status, updatedBy } = request.body;
        const eventRepository = typeorm_1.getRepository(Event_1.default);
        const event = await eventRepository.findOne(id, {
            relations: ["tasks"],
        });
        eventRepository.merge(event, {
            status,
            updatedBy,
        });
        await eventRepository.save(event);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/SuccessUpdateEvent" },
                  message: 'O estado do evento foi atualizado'
          } */
        return response.status(200).json({
            status: 200,
            message: "O estado do evento " + id + " foi atualizado",
            event,
        });
    },
};
