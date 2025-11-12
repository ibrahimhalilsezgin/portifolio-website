import { Schema, model } from "mongoose";


const schema = new Schema({
    id:{
        type:String,
        default:Math.floor(Math.random() * Date.now() - 2)
    },
    title:{
        type:String
    },
    proficiency:{
        type:Number,
    },
    category:{
        type:String,
    }
});

export default model('skill', schema);