import { Request, Response, NextFunction, Router } from "express";
import skills from "./skills.controller";
import { authenticateToken } from "../../middleware/authentication";

const router:any = Router();



const controllerInstance:any = skills.controller;
const methodNames = Object.getOwnPropertyNames(
  skills.class.prototype
).filter((name) => name !== "constructor");


methodNames.forEach((method:string) => {
    let httpMethod:string = method.slice(0, 3).toLowerCase();
    httpMethod == "pos" ? httpMethod = "post" : "";

    const routeName = "/" + method.slice(httpMethod.length).toLowerCase();
    console.log(`${httpMethod} /skills${routeName} Loaded.`)
    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        authenticateToken,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});

export default router;
