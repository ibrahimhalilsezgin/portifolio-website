import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Projects from "../../db/models/Projects";
import fs from "node:fs";

export default {
    async createProject(title:string, description:string) {
        if(!title || !description) {
            throw new Error('Tüm Boşluklar Doldurulmalıdır.');
        };

        const newProject = await new Projects({
            title,
            description
        }).save();
        return {
            id: newProject.id,
            title: newProject.title,
            description: newProject.description
        }
    },
    async updateProject(id:string, title:string, description:string) {
        if(!title || !description) {
            throw new Error('Tüm Boşluklar Doldurulmalıdır.');
        };
        const project = await Projects.findOne({id});
        if(!project) throw new Error('Proje Bulunamadı.');
        const updatedProject = await Projects.findOneAndUpdate({id}, {
            title,
            description
        });
        if(!updatedProject) throw new Error('Proje güncellenirken bir hata oluştu.');
        
        return {
            id: updatedProject.id,
            title: updatedProject.title,
            description: updatedProject.description
        }
    },
    async deleteProject(id:string) {
        if(!id) throw Error('ID alınamadı.');

        const project = await Projects.findOneAndDelete({id});
        if(!project) throw new Error('Proje Bulunamadı.');

        await Projects.findOneAndDelete({id});
        return 'Başarıyla Proje Silindi.'
    }
}