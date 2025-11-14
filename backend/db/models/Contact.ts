
import { Schema, model } from "mongoose";


const schema = new Schema({
    id:{
        type:String,
        default:Math.floor(Math.random() * Date.now() - 2)
    },
    name:{
        type:String
    },
    email:{
        type:String,
    },
    phone:{
        type:String
    },
    message:{
        type:String
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});

export default model('contact', schema);