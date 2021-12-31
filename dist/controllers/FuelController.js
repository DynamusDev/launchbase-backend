"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Fuel_1 = __importDefault(require("../models/Fuel"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Checklist Fuel']
        // #swagger.description = 'Endpoint para cadastrar tipos de combustível.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do cumbustível',
                  type: 'object',
                  schema: { $ref: "#/definitions/FuelTemplate" },
        } */
        const { fuel, densit, } = request.body;
        const fuelRepository = typeorm_1.getRepository(Fuel_1.default);
        const fuelType = fuelRepository.create({
            fuel,
            densit,
        });
        await fuelRepository.save(fuelType);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/ChecklistFuel" },
                  message: 'Succesfuly'
          } */
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            fuel: fuelType
        });
    },
    async edit(request, response) {
        // #swagger.tags = ['Checklist Fuel']
        // #swagger.description = 'Endpoint para alterar os dados do tipo de combustível.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do usuário',
                  type: 'object',
                  schema: { $ref: "#/definitions/EditFuelTemplate" },
        } */
        const { id } = request.params;
        const fuelRepository = typeorm_1.getRepository(Fuel_1.default);
        const fuelType = await fuelRepository.findOne(id);
        fuelRepository.merge(fuelType, request.body);
        await fuelRepository.save(fuelType);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Fuel" },
                  message: 'Succesfuly'
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            fuel: fuelType
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Checklist Fuel']
        // #swagger.description = 'Endpoint para listar os tipos de combustível.'
        const fuelRepository = typeorm_1.getRepository(Fuel_1.default);
        const fuelType = await fuelRepository.find();
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Fuel" },
                  message: 'Succesfuly'
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            fuel: fuelType
        });
    },
    async especific(request, response) {
        const fuelRepository = typeorm_1.getRepository(Fuel_1.default);
        const { id } = request.params;
        const fuelType = await fuelRepository.findOneOrFail(id);
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            fuel: fuelType
        });
    },
    async delete(request, response) {
        const fuelRepository = typeorm_1.getRepository(Fuel_1.default);
        const { id } = request.params;
        const fuelType = await fuelRepository.findOneOrFail(id);
        await fuelRepository.delete(fuelType);
        return response.status(200).json({
            status: 200,
            message: `Succesfuly fuel type deleted`,
        });
    }
};
