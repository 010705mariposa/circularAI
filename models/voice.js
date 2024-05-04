import { Schema, model, models } from 'mongoose';

const VoiceSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    text: { 
        type: String,
        required: [true, 'Text is required!'],
    },
    createdDate: { 
        type: Date,
        default: Date.now,
    },
    tag: { 
        type: [String], 
    },
    voice: { 
        type: String,
        required: [true, 'Voice is required!'],
    },
    recipient: { 
        type: String,
    },
    langugage: { 
        type: String,
        required: [true, 'Language is required!'],
    }
})