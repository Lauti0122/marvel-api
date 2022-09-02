import { model, Schema } from "mongoose";

const productSchema = new Schema({
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
    rating:{
        type: Number,
        default: 3
    },
    pageCount:{
        type: Number
    },
    image:{
        type:String
    },
    language:{
        type: String
    }
},{
    timestamps: false,
    versionKey:false
})

export default model('Comic', productSchema);