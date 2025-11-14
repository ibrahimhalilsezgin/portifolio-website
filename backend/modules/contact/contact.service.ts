import Contact from "../../db/models/Contact";

export default {
    async getAll() {
        const contacts = await Contact.find({});

        return contacts
    },
    async getInfo(id:string) {
        const contact = await Contact.findOne({id});
        console.log(contact)
        if(!contact) throw Error('Contact bulunamadı.');

        return contact
    },
    async sendcontact(email:string, name:string, phone:number, message:string) {
        if(!email || !name) throw Error('Gönderilmeye değer bir e-posta bulunamadı.');

        if(!message) throw Error('contact için açıklama bırakılmamış');

        new Contact({
            email,
            name,
            phone,
            message
        }).save()

        return "Contact Oluşturuldu."

    }
}