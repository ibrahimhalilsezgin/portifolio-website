import {Schema, model} from "mongoose";
import moment from "moment";
moment.locale('tr')
const schema = new Schema({
    id:{
        type:String,
    },
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    createdDate:{
        type:String,
        default: moment().format('LLL')
    },
    updatedDate:{
        type:String,
    },
    imageUrl:{
        type:String,
        default:''
    },
    comments:[{
        name:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        message: {
            type:String,
            required: true
        }
    }]
});

export default model('blog', schema);