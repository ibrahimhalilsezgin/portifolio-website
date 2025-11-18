import { Request, Response } from "express";
import blogService from "./blog.service";
class blogController {
    async postCreate(req:Request, res:Response) {
        const {title, content, imageUrl} = req.body;
        try {
            const result = await blogService.createBlog(title, content, imageUrl);
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        }
    }
    async postUpdate(req:Request, res:Response) {
        const {id, title, content} = req.body;
        try {
            const result = await blogService.updateBlog(id,title, content);
            res.json(result)
        } catch (error:any) {
            console.log(error)
            res.status(400).json({ message: error });
        }
    }
    async postDelete(req:Request, res:Response) {
        const {id} = req.body;
        try {
            const result = await blogService.deleteBlog(id);
            res.json(result)
        } catch (error:any) {
            res.status(400).json({ message: error });
        }
    }
    async getSubject(req:Request, res:Response) {
        try {
            const result = await blogService.getSubject();
            res.send(result)
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

};


export default {
    class: blogController,
    controller: new blogController()
}