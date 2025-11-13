

import { Schema, model } from "mongoose";


const schema = new Schema({
    id:{
        type:String,
        default:Math.floor(Math.random() * Date.now() - 2)
    },
    title:{
        type:String
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});

export default model('certificates', schema);