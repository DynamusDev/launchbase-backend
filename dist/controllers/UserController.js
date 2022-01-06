"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../models/User"));
const bcrypt = require("bcryptjs");
const user_view_1 = require("../views/user_view");
exports.default = {
    async create(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para criar os usuários.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do usuário',
                  type: 'object',
                  schema: { $ref: "#/definitions/UserTemplate" },
        } */
        const { name, phone, email, password } = request.body;
        const userRepository = typeorm_1.getRepository(User_1.default);
        const user = await userRepository.findOne({ email: email });
        if (user) {
            /* #swagger.responses[400] = {
                    schema: { $ref: "#/definitions/CreateError" },
                    error: 'Esse usuário já existe'
            } */
            return response.status(200).json({
                status: 400,
                error: "Esse usuário já existe",
            });
        }
        else {
            let hashedPassword;
            try {
                hashedPassword = await bcrypt.hash(password, 12);
            }
            catch (err) {
                console.error(err);
            }
            const newUser = userRepository.create({
                name,
                phone,
                email,
                password: hashedPassword,
                image: "https://img.icons8.com/ios/344/user.png",
            });
            await userRepository.save(newUser);
            /* #swagger.responses[200] = {
                    schema: { $ref: "#/definitions/User" },
                    message: 'O usuário foi cadastrado!!!'
            } */
            /* #swagger.responses[400] = {
                    schema: { $ref: "#/definitions/CreateError" },
                    error: 'Esse usuário já existe'
            } */
            return response.status(201).json({
                status: 201,
                message: "Succesfuly",
                user: newUser,
            });
        }
    },
    async edit(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para alterar os dados do usuário.'
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
                  schema: { $ref: "#/definitions/EditUserTemplate" },
        } */
        const { id } = request.params;
        const { name, phone, email, password, image } = request.body;
        const userRepository = typeorm_1.getRepository(User_1.default);
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 12);
        }
        catch (err) {
            console.error(err);
        }
        const user = await userRepository.findOne(id, {
            relations: ["messages"],
        });
        userRepository.merge(user, {
            name,
            phone,
            email,
            password: hashedPassword,
            createdAt: Date.now(),
            image,
        });
        await userRepository.save(user);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/User" },
                  message: 'Dados do usuário foram atualizados!!!'
          } */
        return response.status(200).json({
            status: 200,
            message: "Dados do usuário " + name + " foram atualizados!!!",
            user: user_view_1.userRender(user),
        });
    },
    async especific(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para mostrar um usuário específico'
        /* #swagger.parameters['Authorization'] = {
                  in: 'header',
                  required: true,
                  description: 'Chave da api',
                  type: 'string',
        } */
        const userRepository = typeorm_1.getRepository(User_1.default);
        const { id } = request.params;
        const user = await userRepository.findOneOrFail(id, {
            relations: ["messages"],
        });
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/EspecificUser" },
                  message: 'Usuário encontrado'
          } */
        return response.status(200).json({
            status: 200,
            message: "Succesfuly",
            user: user_view_1.userRender(user),
        });
    },
    async index(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para listar os usuários.'
        /* #swagger.parameters['Authorization'] = {
                  in: 'header',
                  required: true,
                  description: 'Chave da api',
                  type: 'string',
        } */
        const userRepository = typeorm_1.getRepository(User_1.default);
        const users = await userRepository.find({ relations: ["messages"] });
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Users" },
                  message: 'Succesfuly'
          } */
        return response.status(200).json({
            status: 200,
            message: "Succesfuly",
            users: user_view_1.userRenderMany(users),
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para deletar um usuário.'
        /* #swagger.parameters['Authorization'] = {
                  in: 'header',
                  required: true,
                  description: 'Chave da api',
                  type: 'string',
        } */
        const userRepository = typeorm_1.getRepository(User_1.default);
        const { id } = request.params;
        const user = await userRepository.findOneOrFail(id);
        userRepository.merge(user, {
            deletedAt: new Date(),
        });
        await userRepository.save(user);
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/DeletedUser" },
                  description: 'Usuários Deletado'
          } */
        return response.status(200).json({
            status: 200,
            message: `Succesfuly user deleted`,
        });
    },
};
