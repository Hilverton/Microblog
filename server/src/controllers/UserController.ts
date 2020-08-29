import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User, { UserInfo } from '../models/User';

export default {
	async create(req: Request, res: Response): Promise<Response> {
		const { name, password, email }: UserInfo = req.body;

		try {
			const hash = await bcrypt.hash(password, 10);
			const user: UserInfo = await User.create({ name, password: hash, email });
			const result = {
				message: 'Usuário cadastrado com sucesso',
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
				}
			}
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
}