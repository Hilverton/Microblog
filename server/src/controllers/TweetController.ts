import { Request, Response } from "express";
import Tweet from "../models/Tweet";
import User from "../models/User";

export default {
    async index(req: Request, res: Response): Promise<Response> {
        const { userId } = req;
        try {
            const list = await Tweet.find();

            return res.status(200).json(list);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async create(req: Request, res: Response): Promise<Response> {
        const { userId } = req;
        const { content, image } = req.body;
        try {
            const user = await User.findById(userId);
            if (!user) return res.status(400).json({ message: 'Usuário não encontrado!' });

            await Tweet.create({ name: user.name, author_id: user._id, content, image });

            return res.status(200).json({ message: 'ok' });
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async update(req: Request, res: Response): Promise<Response> {
        const { tweetId } = req.params;
        const { content } = req.body;
        try {
            const tweetUpdated = await Tweet.findOneAndUpdate({ _id: tweetId }, { content }, { new: true });
			if (!tweetUpdated) return res.status(404).json({ message: 'Tweet não encontrado' })

            return res.status(200).json({ message: 'Tweet atualizado com sucesso!', tweet: tweetUpdated });
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { tweetId } = req.params;
        try {
            const tweetUpdated = await Tweet.deleteOne({ _id: tweetId });
			if (!tweetUpdated) return res.status(404).json({ message: 'Tweet não encontrado' })

            return res.status(200).json({ message: 'Tweet apagado com sucesso!', tweet: tweetUpdated });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
}