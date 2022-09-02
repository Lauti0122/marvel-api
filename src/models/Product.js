import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    category:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true
    },
    img:{
        type: String
    },
},{
    timestamps: false,
    versionKey:false
})

export default model('Product', productSchema);