"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Location_1 = __importDefault(require("../models/Location"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Location']
        // #swagger.description = 'Endpoint para cadastrar os aeroportos.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Location',
                  type: 'object',
                  schema: { $ref: "#/definitions/LocationTemplate" },
        } */
        const { icao, airport, latitude, longitude, city, state, image } = request.body;
        const locationRepository = typeorm_1.getRepository(Location_1.default);
        const location = locationRepository.create({
            icao,
            airport,
            latitude,
            longitude,
            city,
            state,
            image
        });
        await locationRepository.save(location);
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            location: location
        });
    },
    async edit(request, response) {
        // #swagger.tags = ['Location']
        // #swagger.description = 'Endpoint para cadastrar os aeroportos.'
        const { id } = request.params;
        const locationRepository = typeorm_1.getRepository(Location_1.default);
        const location = await locationRepository.findOne(id);
        locationRepository.merge(location, request.body);
        await locationRepository.save(location);
        /* #swagger.responses[201] = {
                 schema: { $ref: "#/definitions/SuccessLocation" },
                 message: 'O Aeroporto foi cadastrado!!!'
         } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            location: location
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Location']
        // #swagger.description = 'Endpoint para cadastrar os aeroportos.'
        const locationRepository = typeorm_1.getRepository(Location_1.default);
        const locations = await locationRepository.find();
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            location: locations
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['Location']
        // #swagger.description = 'Endpoint para cadastrar os aeroportos.'
        const locationRepository = typeorm_1.getRepository(Location_1.default);
        const { id } = request.params;
        const location = await locationRepository.findOneOrFail(id);
        await locationRepository.delete(location);
        return response.status(200).json({
            status: 200,
            message: `Succesfuly location deleted`,
        });
    }
};
