"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Task_1 = __importDefault(require("../models/Task"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Task']
        // #swagger.description = 'Endpoint para criar novas tasks.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Task',
                  type: 'object',
                  schema: { $ref: "#/definitions/TaskTemplate" },
        } */
        const taskRepository = typeorm_1.getRepository(Task_1.default);
        const taskType = taskRepository.create(request.body);
        await taskRepository.save(taskType);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Task" },
          } */
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            task: taskType
        });
    },
    async edit(request, response) {
        // #swagger.tags = ['Task']
        // #swagger.description = 'Endpoint para editar tasks.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Task',
                  type: 'object',
                  schema: { $ref: "#/definitions/TaskTemplate" },
        } */
        const { id } = request.params;
        const taskRepository = typeorm_1.getRepository(Task_1.default);
        const taskType = await taskRepository.findOne(id);
        taskRepository.merge(taskType, request.body);
        await taskRepository.save(taskType);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Task" },
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            taskType
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Task']
        // #swagger.description = 'Endpoint para listar as tasks.'
        const taskRepository = typeorm_1.getRepository(Task_1.default);
        const taskType = await taskRepository.find({ relations: ['responsible'] });
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Task" },
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            task: taskType
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['Task']
        // #swagger.description = 'Endpoint para listar as tasks.'
        const taskRepository = typeorm_1.getRepository(Task_1.default);
        const { id } = request.params;
        const taskType = await taskRepository.findOneOrFail(id);
        await taskRepository.delete(taskType);
        return response.status(200).json({
            status: 200,
            message: `Succesfuly task deleted`,
        });
    }
};
