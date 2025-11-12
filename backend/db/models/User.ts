import { Schema, model } from "mongoose";


const schema = new Schema({
    id:{
        type:String
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    logs:[{
        type:String
    }]
});

export default model('user', schema);