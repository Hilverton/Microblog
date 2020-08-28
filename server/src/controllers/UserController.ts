import { Request, Response } from 'express';
import User from '../models/User';

interface UserInfo {
	name: string;
	password: string;
	email: string;
}

export default {
	async create(req: Request, res: Response): Promise<Response> {
		const { name, password, email }: UserInfo = req.body;
		try {
			const user = await User.create({ name, password, email });

			return res.status(200).json({ user });
		} catch (error) {
			return res.status(400).json({ error });
		}
	}
}