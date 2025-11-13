import { Request, Response } from "express";
import projectsService from "./projects.service";
class settingsController {

    async postCreateProject(req:Request, res:Response) {
        const {title, description} = req.body;
        try {
            const result = await projectsService.createProject(title, description);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async postUpdateProject(req:Request, res:Response) {
        const {id, title, description} = req.body;
        try {
            const result = await projectsService.updateProject(id, title, description);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async postDeleteProject(req:Request, res:Response) {
        const {id} = req.body;
        try {
            const result = await projectsService.deleteProject(id);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
};


export default {
    class: settingsController,
    controller: new settingsController()
}