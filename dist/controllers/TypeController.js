"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const EventType_1 = __importDefault(require("../models/EventType"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para criar tipos de Evento.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Tipo de evento',
                  type: 'object',
                  schema: { $ref: "#/definitions/EventTypeTemplate" },
        } */
        const typeRepository = typeorm_1.getRepository(EventType_1.default);
        const type = typeRepository.create(request.body);
        await typeRepository.save(type);
        /* #swagger.responses[201] = {
                  schema: { $ref: "#/definitions/EventType" },
                  message: 'Tipo de evento Cadastrado!!!'
          } */
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            type
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para listar os tipos de Evento.'
        const typeRepository = typeorm_1.getRepository(EventType_1.default);
        const types = await typeRepository.find({ relations: ['category'] });
        /* #swagger.responses[201] = {
                  schema: { $ref: "#/definitions/EventType" },
                  message: 'Tipo de evento Cadastrado!!!'
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            types
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para deletar tipos de Evento.'
        const typeRepository = typeorm_1.getRepository(EventType_1.default);
        const { id } = request.params;
        const type = await typeRepository.findOneOrFail(id);
        await typeRepository.delete(type);
        /* #swagger.responses[201] = {
                schema: { $ref: "#/definitions/DeletedType" },
                message: 'Succesfuly type deleted'
         } */
        return response.status(200).json({
            status: 200,
            message: `Succesfuly type deleted`,
        });
    }
};
