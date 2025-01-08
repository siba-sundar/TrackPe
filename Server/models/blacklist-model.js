import mongoose from 'mongoose';

const blacklistTokenScema = new mongoose.Schema({
    token:{
        type: String,
        required: true, 
        unique: true,
    },

    createdAt:{
        type: Date,
        default: Date.now,
        experies: 86400, 
    }
});


const blacklistTokenModel = mongoose.model('BlacklistTOken', blacklistTokenScema);

export default blacklistTokenModel;