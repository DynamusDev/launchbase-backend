"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../models/User"));
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const sendMail_1 = require("../config/sendMail");
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
        const { name, position, telephone_number, email, master, keyResponder, locations, starthos_user, } = request.body;
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
            const password = crypto.randomBytes(6).toString("hex");
            let hashedPassword;
            try {
                hashedPassword = await bcrypt.hash(password, 12);
            }
            catch (err) {
                console.error(err);
            }
            const newUser = userRepository.create({
                name,
                position,
                telephone_number,
                email,
                password: hashedPassword,
                image: "https://img.icons8.com/ios/344/user.png",
                master,
                keyResponder,
                locations,
                starthos_user,
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
            const emailASerEnviado = {
                from: "naorespondastarthos@gmail.com",
                to: email,
                subject: "Acesso - Starthos",
                text: `Você foi cadastrado em nosso sistema e uma senha foi gerada automaticamente. Para acessar basta colocar as credenciais abaixo\n
Login: ${email}
Senha: ${password} \n
(fique atento com as letras minúsculas e maiúsculas)\n
Você ja pode logar na sua conta com sua senha nova e poderá trocar a senha através do painel no botão de acesso "editar".\n
Obrigado,
Equipe Starthos`,
            };
            sendMail_1.transport.sendMail(emailASerEnviado, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    return response.status(201).json({
                        status: 201,
                        message: "Succesfuly",
                        user: newUser,
                    });
                }
            });
        }
    },
    async edit(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para alterar os dados do usuário.'
        /* #swagger.parameters['Data'] = {
                  in: 'body',
                  required: true,
                  description: 'Dados do usuário',
                  type: 'object',
                  schema: { $ref: "#/definitions/EditUserTemplate" },
        } */
        const { id } = request.params;
        const { name, position, telephone_number, email, password, image } = request.body;
        const userRepository = typeorm_1.getRepository(User_1.default);
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 12);
        }
        catch (err) {
            console.error(err);
        }
        const user = await userRepository.findOne(id, {
            relations: ["locations", "position"],
        });
        userRepository.merge(user, {
            name,
            position,
            telephone_number,
            email,
            password: hashedPassword,
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
            user,
        });
    },
    async especific(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para mostrar um usuário específico'
        const userRepository = typeorm_1.getRepository(User_1.default);
        const { id } = request.params;
        const user = await userRepository.findOneOrFail(id, {
            relations: ["locations", "position"],
        });
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/EspecificUser" },
                  message: 'Usuário encontrado'
          } */
        return response.status(200).json({
            status: 200,
            message: "Succesfuly",
            user,
        });
    },
    async index(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para listar os usuários.'
        const userRepository = typeorm_1.getRepository(User_1.default);
        const { id } = request.params;
        const users = await userRepository.find({
            relations: ["locations", "position"],
        });
        /* #swagger.responses[200] = {
                  schema: { $ref: "#/definitions/Users" },
                  message: 'Succesfuly'
          } */
        return response.status(200).json({
            status: 200,
            message: "Succesfuly",
            users,
        });
    },
    async delete(request, response) {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para deletar um usuário.'
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
