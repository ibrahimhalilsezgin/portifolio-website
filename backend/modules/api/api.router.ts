import { Router } from "express";
import apiController from "./api.controller";
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
    if(routeName == "/projectinfo") return;
    console.log(`${httpMethod} /api${routeName} Loaded.`)
    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});

router.get('/projectinfo/:id', apiController.controller.getProjectInfo)

export default router;
