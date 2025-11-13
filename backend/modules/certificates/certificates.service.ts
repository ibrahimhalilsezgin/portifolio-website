import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Certificates from "../../db/models/Certificates";
import fs from "node:fs";

export default {
    async createCertificate(title:string) {
        if(!title) {
            throw new Error('Tüm Boşluklar Doldurulmalıdır.');
        };

        const newCertificate = await new Certificates({
            title,
        }).save();
        return {
            id: newCertificate.id,
            title: newCertificate.title,
        }
    },
    async updateCertificate(id:string, title:string) {
        if(!title) {
            throw new Error('Tüm Boşluklar Doldurulmalıdır.');
        };
        const Certificate = await Certificates.findOne({id});
        if(!Certificate) throw new Error('Sertifika Bulunamadı.');
        const updatedCertificate = await Certificates.findOneAndUpdate({id}, {
            title,
        });
        if(!updatedCertificate) throw new Error('Sertifika güncellenirken bir hata oluştu.');
        
        return {
            id: updatedCertificate.id,
            title: updatedCertificate.title,
        }
    },
    async deleteCertificate(id:string) {
        if(!id) throw Error('ID alınamadı.');

        const Certificate = await Certificates.findOneAndDelete({id});
        if(!Certificate) throw new Error('Sertifika Bulunamadı.');

        await Certificates.findOneAndDelete({id});
        return 'Başarıyla Sertifika Silindi.'
    }
}