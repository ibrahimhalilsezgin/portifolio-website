import Blog from "../../db/models/Blog"
import moment from "moment";

moment.locale('tr');
export default {
    async createBlog(title:string, content:string, imageUrl:string){
        try {
            if(!title || !content) throw Error('Tüm boşluklar doldurulmalıdır.');
            if(imageUrl) {
            const newBlog =  await new Blog({
                id: title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
                title,
                content,
                imageUrl
            }).save();
            return newBlog;
            }
            const newBlog = await new Blog({
                id: title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
                title,
                content,
            }).save();

            console.log(newBlog)
            return newBlog;
        } catch (error:any) {
            console.log(error)
            throw Error(error)
        }
    }, 
    async updateBlog(id:string, title:string, content:string) {
        try {
            if(!title || !content) throw Error('Tüm boşluklar doldurulmalıdır.');
            const blog = await Blog.findOne({id});
            if(!blog) throw Error('Blog bulunamadı.');

            const updatedBlog = await Blog.findOneAndUpdate({id}, {
                id:title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''),
                title,
                content,
                updatedDate: moment().format('LLL')
            });
            return updatedBlog;
        } catch (error:any) {
            throw Error(error)
        }
    },
    async deleteBlog(id:string) {
        try {
            const blog = await Blog.findOne({id});
            if(!blog) throw Error('Blog bulunamadı.');

            await Blog.findOneAndDelete({id});

            return "Blog Başarıyla silindi";
        } catch (error:any) {
            throw Error(error)
        }
    }
}