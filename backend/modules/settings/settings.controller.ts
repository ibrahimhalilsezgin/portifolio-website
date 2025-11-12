import { Request, Response } from "express";
import settingsService from "./settings.service";
import Skills from "../../db/models/Skills";
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
    async postCreateSkill(req:Request, res:Response) {
        const {title, proficiency} = req.body;

        try {
            const result = await settingsService.newSkill(title, proficiency);
            res.json(result);
        } catch(err:any) {
            res.status(400).send({ message: err.message });
        } 
    };
    async getSkills(req:Request, res:Response) {
        try {
            const result = await settingsService.getSkills();
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
};


export default {
    class: settingsController,
    controller: new settingsController()
}