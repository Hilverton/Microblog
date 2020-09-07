import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User, { UserInfo } from '../models/User';

export default {
	async index(req: Request, res: Response): Promise<Response> {
		try {
			const users = await User.find();

			return res.status(200).json(users);
		} catch (error) {
			return res.status(400).json(error);
		}
	},
	async create(req: Request, res: Response): Promise<Response> {
		const { name, password, email }: UserInfo = req.body;

		try {
			const hash = await bcrypt.hash(password, 10);
			const user = await User.create({ name, password: hash, email });
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

	async update(req: Request, res: Response): Promise<Response> {
		const { name, email }: UserInfo = req.body;

		try {
			const user = await User.findOneAndUpdate({ _id: req.userId }, { name, email }, { new: true });
			if (!user) return res.status(404).json({ message: 'Usuário não encontrado' })

			return res.status(200).json({ message: 'Atualizado com sucesso', user });
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}