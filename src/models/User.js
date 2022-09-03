import {Schema, model} from 'mongoose';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: true
    },
    email:{
        type:String,
        unique: true
    },
    password:{
        type:String,
        required: true    
    },
    //relacion de 1:n (uno a muchos)
    roles:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Role",
        }],
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review",
        }
    ]
},{
    timestamps:false,
    versionKey:false
})

userSchema.statics.encryptPassword = async (password)=>{
    const salt  = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
userSchema.statics.comparePassword = async(password, recivedPassword)=>{
    return await bcrypt.compare(password,recivedPassword)
}

export default model("User", userSchema); 