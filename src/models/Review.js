import {Schema, model} from 'mongoose'
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    date:{
        type: Date,
        default:Date.now
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        require: true
    },
    comment: {
        type: String
    },

    comicID:{ type: mongoose.Schema.Types.ObjectId, ref:"Comic"},
    userID: { type: mongoose.Schema.Types.ObjectId, ref:"User"}

},{
    timestamps: false,
    versionKey:false
})

export default model("Review", reviewSchema);