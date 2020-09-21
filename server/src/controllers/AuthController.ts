import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User, { UserInfo } from '../models/User';
import jwt from 'jsonwebtoken';

interface JWTPayload {
    id: string;
    iat: number;
    exp: number;
}

export default {
	async login(req: Request, res: Response): Promise<Response> {
		const { password, email }: UserInfo = req.body;

        if (!process.env.SECRET_TOKEN_GENERATE) return res.status(500).json({ error: 'Erro interno!' });
		try {
			const user = await User.findOne({ email }).select('+password');
			
            if (!user) return res.status(400).json({ error: 'Usuário não encontrado!' });
            if (!await bcrypt.compare(password, user.password)) return res.status(400).json({ error: 'Senha inválida!' });

            const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN_GENERATE, { expiresIn: '2h' });

			return res.status(200).json({
				token, 
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
				} 
			});
		} catch (error) {
			return res.status(400).json(error);
		}
	},

	async refreshToken(req: Request, res: Response): Promise<Response> {
		const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(404).json({ error: 'Token não encontrado' });

        const token = authHeader.split(' ')[1];
        if (!process.env.SECRET_TOKEN_GENERATE) return res.status(500).json({ error: 'Erro interno' });

        try {
            const data = <JWTPayload>jwt.decode(token);
			if (!data) res.status(500).json({ error: 'Erro interno' }); 

			const user = await User.findById(data.id);
            if (!user) return res.status(401).json({ message: 'Usuário não encontrado!' });
            
			const newToken = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN_GENERATE, { expiresIn: '2h' });

            return res.status(200).json({token: newToken});
        } catch (error) {
            return res.status(400).json(error);
        }
	}
}