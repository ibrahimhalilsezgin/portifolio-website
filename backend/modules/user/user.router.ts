import { Router } from "express";
import userController from "./user.controller";
const router:any = Router();

const controllerInstance:any = userController.controller;
const methodNames = Object.getOwnPropertyNames(
  userController.class.prototype
).filter((name) => name !== "constructor");


methodNames.forEach((method:string) => {
    let httpMethod:string = method.slice(0, 3).toLowerCase(); // get, post, put vs.
    httpMethod == "pos" ? httpMethod = "post" : "";
    const routeName = "/" + method.slice(httpMethod.length).toLowerCase();
        console.log(`${httpMethod} ${routeName} Loaded.`)

    if (router[httpMethod]) {
        router[httpMethod](
        routeName,
        controllerInstance[method].bind(controllerInstance)
        );
    }
});

export default router;
