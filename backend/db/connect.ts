import mongoose from "mongoose";
import User from "./models/User";
import { hashSync } from "bcryptjs";
import CollectedData from "./models/CollectedData";
export const connectDB = async () => {
    mongoose.connect(process.env.databaseConnectionString  || "")
        .then(() => {console.log('Database has been connected.')})
            .catch((err) => { throw new Error('Database has been not connected. Error : ' , err)});
    
    
    const hashedDefaultPassword = hashSync(process.env.defaultPassword as string)
    const user = await User.findOne({id:"1"});
    
    if(user) return;
    new User({
        id:"1",
        username:'DefaultUser',
        password: hashedDefaultPassword
    }).save();
    
    new CollectedData({
        id:'default'
    }).save()
}