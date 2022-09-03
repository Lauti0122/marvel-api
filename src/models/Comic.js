import { model, Schema } from "mongoose";
import mongoose from 'mongoose';

const comicSchema = new  mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true
    },  
    pageCount:{
        type: Number
    },
    rating:{
        type: Number,
        default: 3
    },
    image:{
        type:String
    },
    language:{
        type: String
    },
    reviews:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Review",
        }]
},{
    timestamps: false,
    versionKey:false
})

export default model('Comic', comicSchema);