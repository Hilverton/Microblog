import mongoose, { Document } from 'mongoose';

export interface UserInfo extends Document {
	name: string;
	password: string;
	email: string;
	avatar?: string;
}

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: 'O campo senha é obrigatório, não pode ser vazio.',
		select: false,
	},
	email: {
		type: String,
		trim: true,
    	lowercase: true,
		required: 'O campo email é obrigatório, não pode ser vazio.',
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Preencha um email válido.']
	},
	avatar: {
		type: String,
		default: '',
	}
}, {
	timestamps: true,
});

export default mongoose.model<UserInfo>('User', UserSchema);