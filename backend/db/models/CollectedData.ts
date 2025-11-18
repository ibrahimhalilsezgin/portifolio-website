import { Schema, model } from "mongoose";


const schema = new Schema({
    id:{
        type:String,
        default:'default'
    },
    ip:[{
        type:String,
    }],
});

export default model('data', schema);