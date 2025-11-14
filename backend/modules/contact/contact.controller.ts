import { Request, Response } from "express";
import contactService from "./contact.service";
class contactController {
    async get(req:Request, res:Response) {
        try {
            const result = await contactService.getAll();
            res.json(result)
        } catch(error:any) {
            res.status(400).json({message: error})
        }
    };
    async getInfo(req:Request, res:Response) {
        try {
            const result = await contactService.getInfo(req.params.id);
            res.json(result)
        } catch(error:any) {
            res.status(400).json({message: error})
        }
    };
    async postSend(req:Request, res:Response) {
        const {email,name,phone,message} = req.body
        try {
            const result = await contactService.sendcontact(email,name,phone,message);
            res.json(result)
        } catch(error:any) {
            res.status(400).json({message: error})
        }
    }
};


export default {
    class: contactController,
    controller: new contactController()
}