import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fs from "node:fs";

import path from "node:path";
import About from "../../db/models/About";

export default {

    async getAbout() {
        const about = await About.findOne({ id: 'default'});
        if(!about) {
            new About({
                id:"default"
            }).save();
        };
        return about;
    },
    async updateAbout(name:string, role:string, aboutme:string, github:string, linkedin:string, instagram:string, twitter:string, facebook:string, experience:string, projectCount:string, happyClients:string) {
        const about = await About.findOne({ id: "default" });
        if(!about) {
            new About({
                id:"default"
            }).save();
        };

        const updatedAbout = await About.findOneAndUpdate({ id: "default" }, {
            name,
            role,
            aboutme,
            github,
            linkedin,
            instagram,
            twitter,
            facebook,
            experience,
            projectCount,
            happyClients
        });

        return updatedAbout
    }
}