import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fs from "node:fs";

import User from "../../db/models/User";
import Skills from "../../db/models/Skills";
import Projects from "../../db/models/Projects";
import path from "node:path";
import Certificates from "../../db/models/Certificates";

export default {
    async getAllInfo() {
        const skills = await Skills.find({});
        const projects = await Projects.find({});
        const certificates = await Certificates.find({});
        return {
            skills: skills,
            projects: projects,
            certificates: certificates 
        };
    },
    async getSkills() {
        const skills = await Skills.find({});

        return skills;
    },
    async getProjects() {
        const projects = await Projects.find({});

        return projects;
    },
    async getCertificates() {
        const certificates = await Certificates.find({});
        return certificates;
    },
    async getProjectInfo(id:string) {
        const project = await Projects.findOne({id});
        if(!project) throw Error('Proje Bulunamadı.');

        return project;
    },
    
}