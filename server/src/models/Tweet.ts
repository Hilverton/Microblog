import mongoose, { Document } from 'mongoose';

export interface TweetInfo extends Document {
    author_id: string;
    name: string;
    content: string;
}

const TweetSchema = new mongoose.Schema({
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },

}, {
    timestamps: true,
});

export default mongoose.model<TweetInfo>('Tweet', TweetSchema);