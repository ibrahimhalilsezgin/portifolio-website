import { Request, Response } from "express";
import userService from "./user.service";

class userController {
    async postlogin(req:Request, res:Response) {
        try {
            const { username, password } = req.body;

            const result = await userService.login(username, password);

            res.json(result);
        } catch (err:any) {
            res.status(400).json({ message: err.message });
        }
    }
}



export default {
    controller:new userController(),
    class: userController
};