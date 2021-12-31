"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerAutogen = require("swagger-autogen")();
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("./models/User"));
const Chat_1 = __importDefault(require("./models/Chat"));
const ChecklistFuel_1 = __importDefault(require("./models/ChecklistFuel"));
const Event_1 = __importDefault(require("./models/Event"));
const EventType_1 = __importDefault(require("./models/EventType"));
const Fuel_1 = __importDefault(require("./models/Fuel"));
const Category_1 = __importDefault(require("./models/Category"));
const Task_1 = __importDefault(require("./models/Task"));
dotenv_1.default.config();
const outputFile = `./src/swagger_output.json`;
const endpointsFiles = [
    `./${process.env.ROUTE}/routes.${process.env.EXTENSION}`,
];
const doc = {
    info: {
        version: "1.0.1",
        title: "Starthos API",
        description: "Documentação para a API da Starthos App.",
    },
    host: process.env.SWAGGER_HOST,
    basePath: "/",
    schemes: process.env.PROTOCOL,
    securityDefinitions: {
        Bearer: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
        },
    },
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
            name: "Checklist Fuel",
            description: "Create and List",
        },
        {
            name: "Event",
            description: "Create and List",
        },
        {
            name: "Chat",
            description: "Create and List",
        },
        {
            name: "Location",
            description: "Create and List",
        },
        {
            name: "Profile",
            description: "Create and List",
        },
        {
            name: "Task",
            description: "Create and List",
        },
        {
            name: "Upload",
            description: "Upload of Image, Video and Audio files",
        },
    ],
    definitions: {
        User: User_1.default,
        Fuel: Fuel_1.default,
        ChecklistFuel: ChecklistFuel_1.default,
        Event: Event_1.default,
        EventType: EventType_1.default,
        Category: Category_1.default,
        Task: Task_1.default,
        Chat: Chat_1.default,
        UserTemplate: {
            name: "Alexandre Alves Nascimento",
            position: [{ id: 1 }],
            telephone_number: "11987611064",
            email: "alexandrenascimento@live.com",
            master: true,
            keyResponder: true,
            locations: [{ id: 1 }],
            starthos_user: true,
        },
        EventTypeTemplate: {
            type: "Obstrução na pista",
            category: { id: 1 },
            tasks: [{ id: 1 }, { id: 2 }],
        },
        EditUserTemplate: {
            name: "Alexandre Alves Nascimento",
            position: [{ id: 1 }],
            telephone_number: "11987611064",
            email: "alexandrenascimento@live.com",
            image: "https://img.icons8.com/officel/2x/person-male-skin-type-6.png",
            password: "q1w2e3r4",
        },
        EditFuelTemplate: {
            densit: 0.74,
        },
        EventTemplate: {
            date: "2021-02-12",
            time: "09:00:00",
            type: 1,
            prefix: "PR-MKM",
            description: "obstrução na pista",
            status: "ativo",
            user: 1,
            cabeceira_dePouso: "l19",
            modelo_aeronave: "B3",
            numero_passageiros: "N/A",
            tipo_deCarga: "N/A",
            locations: 1,
            category: 1,
            tasks: [{ id: 1 }],
        },
        EditEventTemplate: {
            status: "finalizado",
            updatedBy: 1,
        },
        ChatTemplate: {
            room: "PRG_8431",
            date: "2021-02-12",
            time: "09:00:00",
            message: "Hello guys",
            type: "text",
            author: 1,
        },
        ChecklistFuelTemplate: {
            prefix: "PP-FFF",
            model: "B4",
            truck_board: "https://www.placascarplac.com/wp-content/uploads/sites/836/2017/06/ALUGUEL.png",
            fuel_type: 1,
            amount: 350,
            odometer_photo: "https://www.placascarplac.com/wp-content/uploads/sites/836/2017/06/ALUGUEL.png",
            date: "2021-02-12",
            time: "09:00:00",
            user_id: 1,
            location: 1,
        },
        FuelTemplate: {
            fuel: "JET-A1",
            densit: 0.84,
        },
        CategoryTemplate: {
            category: "emergência",
        },
        LocationTemplate: {
            icao: "SBJD",
            airport: "Comandante Rolim Adolfo Amaro",
            latitude: -23.182255,
            longitude: -46.943318,
            city: "Jundiaí",
            state: "SP",
            image: "http://www.voa-sp.com.br/wp-content/uploads/2017/02/jundia.jpg",
        },
        TaskTemplate: {
            task: "ligar para a polícia",
            phone: "190",
            backup_phone: "191",
            responsible: [{ id: 1 }],
        },
        ProfileTemplate: {
            profile: "Developer",
        },
        SuccessProfile: {
            status: 201,
            message: "Perfil Criado!!!",
        },
        SuccessLocation: {
            status: 201,
            message: "Aeroporto Cadastrado!!!",
        },
        SuccessEventType: {
            status: 201,
            message: "Tipo de evento Cadastrado!!!",
        },
        SuccessUpdateEvent: {
            status: 200,
            message: "O estado do evento foi atualizado",
            event: {},
        },
        Token: {
            authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNTczNzQ3LCJleHAiOjE2MTM2NjAxNDd9.3K2XUMOLtN8pLqQnHTx4reh_D87553KieZm8PFQOGV8",
        },
        SendMessage: {
            message: "Comando enviado!!!",
        },
        Sign: {
            message: "Id Criado!!!",
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
        FuelChecklists: {
            status: 200,
            message: "Succesfuly",
            checklists: [],
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
