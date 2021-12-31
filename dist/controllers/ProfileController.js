"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Profile_1 = __importDefault(require("../models/Profile"));
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['Profile']
        // #swagger.description = 'Endpoint para criar os perfis.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Profile',
                  type: 'object',
                  schema: { $ref: "#/definitions/ProfileTemplate" },
        } */
        const { profile, } = request.body;
        const profileRepository = typeorm_1.getRepository(Profile_1.default);
        const profil = profileRepository.create({
            profile,
        });
        await profileRepository.save(profil);
        /* #swagger.responses[201] = {
                schema: { $ref: "#/definitions/ProfileTemplate" },
                message: 'O perfil foi cadastrado!!!'
        } */
        return response.status(201).json({
            status: 201,
            message: 'Succesfuly',
            profile: profil
        });
    },
    async edit(request, response) {
        // #swagger.tags = ['Profile']
        // #swagger.description = 'Endpoint para criar os perfis.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Profile',
                  type: 'object',
                  schema: { $ref: "#/definitions/ProfileTemplate" },
        } */
        const { id } = request.params;
        const profileRepository = typeorm_1.getRepository(Profile_1.default);
        const fuelType = await profileRepository.findOne(id);
        profileRepository.merge(fuelType, request.body);
        await profileRepository.save(fuelType);
        /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/ProfileTemplate" },
               message: 'O perfil foi cadastrado!!!'
       } */
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            profiles: fuelType
        });
    },
    async index(request, response) {
        // #swagger.tags = ['Profile']
        // #swagger.description = 'Endpoint para criar os perfis.'
        const profileRepository = typeorm_1.getRepository(Profile_1.default);
        const fuelType = await profileRepository.find();
        return response.status(200).json({
            status: 200,
            message: 'Succesfuly',
            profiles: fuelType
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['Profile']
        // #swagger.description = 'Endpoint para criar os perfis.'
        const profileRepository = typeorm_1.getRepository(Profile_1.default);
        const { id } = request.params;
        const fuelType = await profileRepository.findOneOrFail(id);
        await profileRepository.delete(fuelType);
        return response.status(200).json({
            status: 200,
            message: `Succesfuly profile deleted`,
        });
    }
};
