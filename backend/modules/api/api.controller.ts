import { Request, Response } from "express";
import apiService from "./api.service";
class apiController {

    async getAllInfo(req:Request, res:Response) {
        try {
            const result = await apiService.getAllInfo();
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async getSkills(req:Request, res:Response) {
        try {
            const result = await apiService.getSkills();
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async getProjects(req:Request, res:Response) {
        try {
            const result = await apiService.getProjects();
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async getCertificates(req:Request, res:Response) {
        try {
            const result = await apiService.getCertificates();
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async getProjectInfo(req:Request, res:Response) {
        const { id } = req.params;
        try {
            const result = await apiService.getProjectInfo(id)
            res.json(result);
        } catch(error:any) {
            res.status(400).json({ message: error });
        };
    };
};


export default {
    class: apiController,
    controller: new apiController()
}