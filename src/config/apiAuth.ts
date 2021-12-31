import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../config/auth";

export function verifyJWT(req: Request, res: Response, next: () => void) {
  var token = req.body.token || req.query.token || req.headers["Authorization"];

  if (token) {
    jwt.verify(token, auth.secret, (err: any, decoded: any) => {
      if (err) {
        return res.json({
          success: false,
          message: "A autenticação com o token falhou.",
        });
      } else {
        (<any>req).decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "Nenhum token foi informado.",
    });
  }
}
