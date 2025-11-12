import { Router } from "express";
import settingsController from "./settings.controller";
import { authenticateToken } from "../../middleware/authentication";
const router:any = Router();

const controllerInstance:any = settingsController.controller;
const methodNames = Object.getOwnPropertyNames(
  settingsController.class.prototype
).filter((name) => name !== "constructor");


methodNames.forEach((method:string) => {
    let httpMethod:string = method.slice(0, 3).toLowerCase();
    httpMethod == "pos" ? httpMethod = "post" : "";

    const routeName = "/" + method.slice(httpMethod.length).toLowerCase();
    console.log(`${httpMethod} ${routeName} Loaded.`)
    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        authenticateToken,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});

export default router;
