import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface JWTPayload {
    id: string;
    iat: number;
    exp: number;
}

export default {
    async autenticate(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(404).json({ error: 'Token não encontrado' });

        const token = authHeader.split(' ')[1];
        if (!process.env.SECRET_TOKEN_GENERATE) return res.status(500).json({ error: 'Erro interno' });

        try {
            const isValid = <JWTPayload>jwt.verify(token, process.env.SECRET_TOKEN_GENERATE);

            if (!isValid) return res.status(401).json({ message: 'Token inválido' });
            req.userId = isValid.id;
            
            return next();
        } catch (error) {
            res.status(400).json(error);
        }
	}
}