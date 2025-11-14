import { Request, Response } from "express";
import aboutService from "./about.service";
class settingsController {


    async getInfo(req:Request, res:Response) {
        try {
            const result = await aboutService.getAbout();
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async postUpdate(req:Request, res:Response) {
        const {name, role, aboutme, github, linkedin, instagram, twitter, facebook, experience, projectCount, happyClients} = req.body;
        try {
            const result = await aboutService.updateAbout(name, role, aboutme, github, linkedin, instagram, twitter, facebook, experience, projectCount, happyClients);
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