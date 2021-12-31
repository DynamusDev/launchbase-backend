"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChecklistFuel_1 = __importDefault(require("../models/ChecklistFuel"));
const Fuel_1 = __importDefault(require("../models/Fuel"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Checklist Fuel']
        // #swagger.description = 'Endpoint para realizar os checklists de abastecimento.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do abastecimento',
                  type: 'object',
                  schema: { $ref: "#/definitions/ChecklistFuelTemplate" },
        } */
        const { prefix, model, truck_board, fuel_type, amount, odometer_photo, date, time, user_id, location } = request.body;
        const fuelTypeRepository = typeorm_1.getRepository(Fuel_1.default);
        const fuel_type_ = await fuelTypeRepository.findOneOrFail({ where: { id: fuel_type } });
        const weight_fuel_supplied = amount * fuel_type_.densit;
        const fuelRepository = typeorm_1.getRepository(ChecklistFuel_1.default);
        const fuelType = fuelRepository.create({
            prefix,
            model,
            truck_board,
            fuel_type,
            amount,
            odometer_photo,
            date,
            time,
            user_id,
            location,
            weight_fuel_supplied
        });
        await fuelRepository.save(fuelType);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Fuel" },
                  message: 'Succesfuly'
          } */
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            fuel: fuelType
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Checklist Fuel']
        // #swagger.description = 'Endpoint para listar os checklists de abastecimento.'
        const fuelRepository = typeorm_1.getRepository(ChecklistFuel_1.default);
        const fuelType = await fuelRepository.find();
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/FuelChecklists" },
                  message: 'Succesfuly'
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            fuel: fuelType
        });
    },
    async especific(request, response) {
        // #swagger.tags = ['Checklist Fuel']
        // #swagger.description = 'Endpoint para buscar um checklist específico.'
        const fuelRepository = typeorm_1.getRepository(ChecklistFuel_1.default);
        const { id } = request.params;
        const fuelType = await fuelRepository.findOneOrFail(id);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/ChecklistFuel" },
                  message: 'Succesfuly'
          } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            fuel: fuelType
        });
    }
};
