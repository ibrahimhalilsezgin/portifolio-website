import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
export const authenticateToken = (req:Request, res:Response, next:NextFunction) => {
    const header = req.headers.authorization;
    // console.log(header)
    if(!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token Geçersiz'});
    }


    const token = header.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.SecretKey as string);

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403);
    }
};
