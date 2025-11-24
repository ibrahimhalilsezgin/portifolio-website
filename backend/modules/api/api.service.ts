import Skills from "../../db/models/Skills";
import Projects from "../../db/models/Projects";
import Certificates from "../../db/models/Certificates";
import About from "../../db/models/About";
import Blog from "../../db/models/Blog";
import Data from "../../db/models/CollectedData";
import redis from "../../cache/redis";

export default {
    async getAllInfo() {
        const skills = await Skills.find({});
        const projects = await Projects.find({});
        const certificates = await Certificates.find({});
        const about = await About.findOne({id:'default'});

        const cachedData = await redis.get(`allinfo`)
        if(cachedData) {
            console.log('redisten çekildi')
            return JSON.parse(cachedData)
        }
        await redis.setEx(`allinfo`, 60 * 5, JSON.stringify({skills, projects, certificates, about}));


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
    async getBlogs() {
        const blogs = await Blog.find({  }).sort({ _id: -1});
        return blogs

    },
    async getBlogInfo(id:string) {
        const blog = await Blog.findOne({ id });
        if(!blog) throw Error('Blog Bulunamadı.');
        return blog;
    },
    async getData() {
        const data = await Data.findOne({ id:'default' });
        return data;
    }
    
}