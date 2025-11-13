import { Request, Response } from "express";
import CertificatesService from "./certificates.service";
class settingsController {

    async postCreateCertificate(req:Request, res:Response) {
        const {title} = req.body;
        try {
            const result = await CertificatesService.createCertificate(title);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({ message: error });
        };
    };
    async postDeleteCertificate(req:Request, res:Response) {
        const {id} = req.body;
        try {
            const result = await CertificatesService.deleteCertificate(id);
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