import { Request, Response, NextFunction, Router } from "express";
import certificates from "./certificates.controller";
import { authenticateToken } from "../../middleware/authentication";
import multer from "multer";
import path from "path";
import fs from "node:fs";
const router:any = Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "..", "..", "uploads", "certificates");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
const controllerInstance:any = certificates.controller;
const methodNames = Object.getOwnPropertyNames(
  certificates.class.prototype
).filter((name) => name !== "constructor");


methodNames.forEach((method:string) => {
    let httpMethod:string = method.slice(0, 3).toLowerCase();
    httpMethod == "pos" ? httpMethod = "post" : "";

    const routeName = "/" + method.slice(httpMethod.length).toLowerCase();
    console.log(`${httpMethod} /certificates${routeName} Loaded.`)
    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        authenticateToken,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});

router.post('/upload', upload.single('certificatesImage'), (req:Request, res:Response, next:NextFunction) => {

    const title = req.body.title; 

    const file = req.file;
    if(!file) return;
    const newPath = path.join(file.destination, `${title}.jpeg`);

    fs.renameSync(file.path, newPath);

    res.status(200).send({message: 'Resim başarıyla yüklendi.'});
})
export default router;
