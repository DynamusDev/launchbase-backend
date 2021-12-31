import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Chat from "../models/Chat";
import User from "../models/User";
import { chatRender, chatRenderMany } from "../views/chat_view";

export default {
  async create(request: Request, response: Response) {
    // #swagger.tags = ['Chat']
    // #swagger.description = 'Endpoint para enviar mensagens.'
    /* #swagger.parameters['Data'] = {
              in: 'body',
              required: true,
              description: 'Dados do usuário',
              type: 'object',
              schema: { $ref: "#/definitions/ChatTemplate" },
    } */
    const { message, type, author, room } = request.body;

    const data = {
      room,
      message,
      datetime: `${Date.now()}`,
      type,
      author,
    };

    const chatRepository = getRepository(Chat);
    const userRepository = getRepository(User);

    const chat = chatRepository.create(data);
    const auth = await userRepository.find({
      where: { id: author },
    });

    await chatRepository.save(chat);

    const socketData = {
      id: Math.random(),
      room,
      datetime: Date.now(),
      message,
      type,
      author: auth[0],
    };

    request.socket.emit(room, socketData);

    /* #swagger.responses[201] = { 
              schema: { $ref: "#/definitions/Chat" }
      } */

    return response.status(201).json({
      status: 201,
      message: "Succesfuly",
      chat: chatRender(chat),
    });
  },

  async index(request: Request, response: Response) {
    // #swagger.tags = ['Chat']
    // #swagger.description = 'Endpoint para listar as mensagens.'
    const { room } = request.params;
    const chatRepository = getRepository(Chat);
    const chat = await chatRepository.find({ where: { room: room } });

    /* #swagger.responses[201] = { 
              schema: { $ref: "#/definitions/Chat" }
      } */

    return response.status(200).json({
      status: 200,
      message: "Succesfuly",
      chat: chatRenderMany(chat),
    });
  },
};
