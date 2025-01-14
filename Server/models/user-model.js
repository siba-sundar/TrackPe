import mongoose from "mongoose";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname:{
        firstname : {
            type: String,
            require: true,
            minlength: [3, 'First name must be of 3 characters'],
        },
        lastname:{
            type:String,
        }
    },

    email:{
        type: String, 
        require: true, 
        unique: true,
    },
    password:{
        type: String,
        require: true,
        select: false,
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    socketId:{
        type: String,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, {expiresIn: '24h'});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);
export default userModel;
