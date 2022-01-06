const swaggerAutogen = require("swagger-autogen")();
import dotenv from "dotenv";
import User from "./models/User";
import Chat from "./models/Chat";
dotenv.config();

const outputFile = `./src/swagger_output.json`;
const endpointsFiles = [
  `./${process.env.ROUTE}/routes.${process.env.EXTENSION}`,
];

const doc = {
  info: {
    version: "1.0.1",
    title: "Launchbase API",
    description: "Documentação para a API launch base.",
  },
  host: process.env.SWAGGER_HOST,
  basePath: "/",
  schemes: process.env.PROTOCOL,
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Session",
      description: "Login and Forgot-Password",
    },
    {
      name: "User",
      description: "Create, Edit, List and Delete",
    },
    {
      name: "Chat",
      description: "Create and List",
    },
    {
      name: "Upload",
      description: "Upload of Image, Video and Audio files",
    },
  ],
  definitions: {
    User: User,
    Chat: Chat,
    UserTemplate: {
      name: "Alexandre Alves Nascimento",
      password: "q1w2e3r4",
      phone: "11987611064",
      email: "alexandrenascimento@live.com",
    },
    EditUserTemplate: {
      name: "Alexandre Alves Nascimento",
      phone: "11987611064",
      email: "alexandrenascimento@live.com",
      image: "https://img.icons8.com/officel/2x/person-male-skin-type-6.png",
      password: "q1w2e3r4",
    },
    ChatTemplate: {
      room: "PRG_8431",
      date: "2021-02-12",
      time: "09:00:00",
      message: "Hello guys",
      type: "text",
      author: 1,
    },
    Token: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNTczNzQ3LCJleHAiOjE2MTM2NjAxNDd9.3K2XUMOLtN8pLqQnHTx4reh_D87553KieZm8PFQOGV8",
    },
    Session: {
      email: "alexandrenascimento@live.com",
      password: "q1w2e3r4",
    },
    ErrorSessionEmail: {
      status: 401,
      error: "Este email não foi encontrado na nossa base de dados",
    },
    ErrorUserDeleted: {
      status: 403,
      error: "Este usuário não está mais cadastrado na nossa base de dados",
    },
    ErrorToken: {
      status: 403,
      error: "Informe o token",
    },
    ErrorSessionPassword: {
      status: 401,
      error: "Falha no Login, senha inválida",
    },
    SuccessSession: {
      status: 201,
      message: "Succesfuly",
      user: {},
      token: "token",
    },
    ForgotPassword: {
      email: "alexandrenascimento@live.com",
    },
    SuccessChangePass: {
      status: 200,
      message: "Uma nova senha foi enviada para o seu email!!!",
    },
    Users: {
      status: 200,
      message: "Succesfuly",
      users: [],
    },
    EspecificUser: {
      status: 200,
      message: "Succesfuly",
      user: {},
    },
    CreateError: {
      error: "Esse usuário já existe",
    },
    DeletedUser: {
      status: 200,
      message: `Succesfuly user deleted`,
    },
    DeletedType: {
      status: 200,
      message: `'Succesfuly type deleted`,
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require(`./server.${process.env.EXTENSION}`);
});
