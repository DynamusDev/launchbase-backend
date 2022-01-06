"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../config/auth");
function verifyJWT(req, res, next) {
    var token = req.body.token || req.query.token || req.headers["authorization"];
    if (token) {
        jsonwebtoken_1.default.verify(token.replace("Bearer ", ""), auth_1.auth.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "A autenticação com o token falhou.",
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).send({
            success: false,
            message: "Nenhum token foi informado.",
        });
    }
}
exports.verifyJWT = verifyJWT;
