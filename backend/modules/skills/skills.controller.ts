import { Request, Response } from "express";
import skillsService from "./skills.service";
class settingsController {

    async postCreateSkill(req:Request, res:Response) {
        const {title, proficiency} = req.body;

        try {
            const result = await skillsService.newSkill(title, proficiency);
            res.json(result);
        } catch(err:any) {
            res.status(400).send({ message: err.message });
        } 
    };
    async postDeleteSkill(req:Request, res:Response) {
        const {title} = req.body;
        try {
            const result = await skillsService.deleteSkill(title);
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        }
    }
};


export default {
    class: settingsController,
    controller: new settingsController()
}