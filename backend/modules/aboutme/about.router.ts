import { Router } from "express";
import apiController from "./about.controller";
import { authenticateToken } from "../../middleware/authentication";
const router:any = Router();

const controllerInstance:any = apiController.controller;
const methodNames = Object.getOwnPropertyNames(
  apiController.class.prototype
).filter((name) => name !== "constructor");


methodNames.forEach((method:string) => {
    let httpMethod:string = method.slice(0, 3).toLowerCase();
    httpMethod == "pos" ? httpMethod = "post" : "";

    const routeName = "/" + method.slice(httpMethod.length).toLowerCase();
    console.log(`${httpMethod} /about${routeName} Loaded.`)
    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        authenticateToken,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});


export default router;
