import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Skills from "../../db/models/Skills";
import fs from "node:fs";

export default {
    async newSkill(title:string, proficiency:number) {
        if(!title || !proficiency) {
            throw new Error('Tüm Boşluklar Doldurulmalıdır.');
        };

        const newSkill = await new Skills({
            title,
            proficiency
        }).save();
        return {
            id: newSkill.id,
            title: newSkill.title,
            proficiency: newSkill.proficiency
        }
    },
    async deleteSkill(title:string) {
        const skill = await Skills.find({ title });

        if(!skill) {
            throw Error('Skill not found.');
        }
        await Skills.findOneAndDelete({ title });
        return "Successfully deleted";
    }
}