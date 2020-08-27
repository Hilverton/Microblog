import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: 'O campo senha é obrigatório, não pode ser vazio.',
	},
	email: {
		type: String,
		trim: true,
    	lowercase: true,
		required: 'O campo email é obrigatório, não pode ser vazio.',
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Preencha um email válido.']
	}
}, {
	timestamps: true,
});

export default mongoose.model('User', UserSchema);