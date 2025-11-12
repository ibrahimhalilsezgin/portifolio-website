import { Schema, model } from "mongoose";


const schema = new Schema({
    hitColor:{
        type:String
    },
    backgroundColor:{
        type:String,
    },
    Name:{
        type:String,
    },
    links:[{
        icon:String,
        url: String
    }]
});

export default model('user', schema);