import { Request, Response } from "express";
import settingsService from "./settings.service";
class settingsController {
    async postUpdateSettings(req:Request, res:Response) {
        const {username, newpassword, currentpassword} = req.body;
        try {
            if(username.length < 3 || !username || !newpassword || !currentpassword) {
                return res.status(400).send('Tüm Boşlukları Doldurmalısın.');
            };
            const result = await settingsService.settings(req.user, username, newpassword, currentpassword);
            console.log(result)
            res.json(result);
        } catch (err:any) {
            res.status(400).json({ message: err.message });
        }
    };   
};


export default {
    class: settingsController,
    controller: new settingsController()
}