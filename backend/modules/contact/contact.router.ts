import { Request, Response, NextFunction, Router } from "express";
import contact from "./contact.controller";
import { authenticateToken } from "../../middleware/authentication";
import multer from "multer";
import path from "path";
import fs from "node:fs";
import contactController from "./contact.controller";
const router:any = Router();


const controllerInstance:any = contact.controller;
const methodNames = Object.getOwnPropertyNames(
  contact.class.prototype
).filter((name) => name !== "constructor");


methodNames.forEach((method:string) => {
    let httpMethod:string = method.slice(0, 3).toLowerCase();
    httpMethod == "pos" ? httpMethod = "post" : "";

    const routeName = "/" + method.slice(httpMethod.length).toLowerCase();
    if(routeName == "/info") return;
    console.log(`${httpMethod} /contact${routeName} Loaded.`)
    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});

router.get('/info/:id', authenticateToken, contactController.controller.getInfo)

export default router;
