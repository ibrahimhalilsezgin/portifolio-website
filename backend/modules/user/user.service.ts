import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../db/models/User";

export default {
    async login(username:string, password:string){
        const hashed = await bcrypt.hash(password, 10);

        const user = await User.findOne({ username });

        if(!user) {
            throw new Error("Kullanıcı Bulunamadı.");
        }


        const isMatch = await bcrypt.compare(password, user.password as string);

        if(!isMatch) {
            throw new Error("Şifre Doğru Değil.");
        };

        const token = jwt.sign({ id:user.id, username: user.username }, process.env.secretKey as string, { expiresIn: "2h"});

        return {
            user:{
                id: user.id,
                username: user.username
            },
            token
        }

    }
}