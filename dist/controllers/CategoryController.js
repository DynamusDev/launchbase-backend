"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = __importDefault(require("../models/Category"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para criar categorias de eventos.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Categoria',
                  type: 'object',
                  schema: { $ref: "#/definitions/CategoryTemplate" },
        } */
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const type = categoryRepository.create(request.body);
        await categoryRepository.save(type);
        /* #swagger.responses[201] = {
                  schema: { $ref: "#/definitions/Category" },
                  message: 'Categoria Cadastrada!!!'
          } */
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            type
        });
    },
    async edit(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para editar categorias de eventos.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Categoria',
                  type: 'object',
                  schema: { $ref: "#/definitions/CategoryTemplate" },
        } */
        const { id } = request.params;
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const type = await categoryRepository.findOne(id);
        categoryRepository.merge(type, request.body);
        await categoryRepository.save(type);
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            type: type
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para editar categorias de eventos.'
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const type = await categoryRepository.find();
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            type: type
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['Event']
        // #swagger.description = 'Endpoint para editar categorias de eventos.'
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const { id } = request.params;
        const type = await categoryRepository.findOneOrFail(id);
        await categoryRepository.delete(type);
        return response.status(200).json({
            status: 200,
            message: `Succesfuly type deleted`,
        });
    }
};
