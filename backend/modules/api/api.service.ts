import Skills from "../../db/models/Skills";
import Projects from "../../db/models/Projects";
import Certificates from "../../db/models/Certificates";
import About from "../../db/models/About";

export default {
    async getAllInfo() {
        const skills = await Skills.find({});
        const projects = await Projects.find({});
        const certificates = await Certificates.find({});
        const about = await About.findOne({id:'default'});
        return {
            skills: skills,
            projects: projects,
            certificates: certificates,
            about: about
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