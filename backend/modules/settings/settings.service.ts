import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../db/models/User";
import Skills from "../../db/models/Skills";

export default {
    async settings(user:any, newusername:string, newpassword:string, currentpassword:string){
        

        const usr = await User.findOne({ username: user.username });

        if(!usr) {
            throw new Error("Kullanıcı Bulunamadı.");
        }
        

        const isMatch = await bcrypt.compare(currentpassword, usr.password as string);

        if(!isMatch) {
            throw new Error("Şifre Doğru Değil.");
        };
        const hashedNewPassword = bcrypt.hashSync(newpassword, 10);
        const updatedUser = await User.findOneAndUpdate({ username: user.username }, {
            username: newusername ? newusername : user.username,
            password: hashedNewPassword ? hashedNewPassword : usr.password
        });
        console.log(updatedUser)
        return {
            user:{
                id: usr.id,
                username: updatedUser?.username
            },
        }

    },
}