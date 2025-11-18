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
    },
    async getSubject(){
        try {
            const subject = [
                `Sen, teknoloji ve yazılım konularında uzman bir blog yazarı gibi davran.
                Teknoloji, yazılım, programlama veya bilgisayar donanımı hakkında ilgi çekici, bilgilendirici ve SEO uyumlu bir blog yazısı hazırla.

                Kurallar:
                - Bir adet "title" üret.
                - Uzun, detaylı ve tamamen HTML etiketleriyle yazılmış bir "content" üret.
                - Google görsellerden geçerli bir resim bul ve linkini "imageURL" değerine koy. (Unsplash KULLANMA.)
                - Ürettiğin içerikte gün, ay, yıl veya herhangi bir tarih GEÇMEYECEK.
                - Yapay zeka ile alakalı değil yazılım dilleriyle alakalı şeyler yazabilirsin
                - bilgisayar parçaları hakkında konuşabilirsin
                - Sonuç SADECE aşağıdaki JSON formatında olacak, başka hiçbir açıklama yazmayacaksın:

                {
                    "title": "Yazı Başlığı",
                    "content": "HTML formatında uzun blog içeriği...",
                    "imageURL": "Geçerli resim URL'si"
                }

                SADECE JSON FORMATINDA VER MARKDOWN FORMATINDA VERME`,
                `Sen, teknoloji ve yazılım konularında uzman bir blog yazarı gibi davran.
                Teknoloji, yazılım, programlama veya bilgisayar donanımı hakkında ilgi çekici, bilgilendirici ve SEO uyumlu bir blog yazısı hazırla.

                Kurallar:
                - Bir adet "title" üret.
                - Uzun, detaylı ve tamamen HTML etiketleriyle yazılmış bir "content" üret.
                - Google görsellerden geçerli bir resim bul ve linkini "imageURL" değerine koy. (Unsplash KULLANMA.)
                - Ürettiğin içerikte gün, ay, yıl veya herhangi bir tarih GEÇMEYECEK.
                - Yapay zeka ile alakalı değil bilgisayarlarla alakalı şeyler yazabilirsin
                - bilgisayar parçaları hakkında konuşabilirsin
                - Sonuç SADECE aşağıdaki JSON formatında olacak, başka hiçbir açıklama yazmayacaksın:

                {
                    "title": "Yazı Başlığı",
                    "content": "HTML formatında uzun blog içeriği...",
                    "imageURL": "Geçerli resim URL'si"
                }

                SADECE JSON FORMATINDA VER MARKDOWN FORMATINDA VERME`,

                `Sen, teknoloji ve yazılım konularında uzman bir blog yazarı gibi davran.
                Teknoloji, yazılım, programlama veya bilgisayar donanımı hakkında ilgi çekici, bilgilendirici ve SEO uyumlu bir blog yazısı hazırla.

                Kurallar:
                - Bir adet "title" üret.
                - Uzun, detaylı ve tamamen HTML etiketleriyle yazılmış bir "content" üret.
                - Google görsellerden geçerli bir resim bul ve linkini "imageURL" değerine koy. (Unsplash KULLANMA.)
                - Ürettiğin içerikte gün, ay, yıl veya herhangi bir tarih GEÇMEYECEK.
                - Yapay zeka ile alakalı şeyler yazabilirsin
                - bilgisayar parçaları hakkında konuşabilirsin
                - Sonuç SADECE aşağıdaki JSON formatında olacak, başka hiçbir açıklama yazmayacaksın:

                {
                "title": "Yazı Başlığı",
                "content": "HTML formatında uzun blog içeriği...",
                "imageURL": "Geçerli resim URL'si"
                }

                SADECE JSON FORMATINDA VER MARKDOWN FORMATINDA VERME`,
                `Sen, teknoloji ve yazılım konularında uzman bir blog yazarı gibi davran.
                Teknoloji, yazılım, programlama veya bilgisayar donanımı hakkında ilgi çekici, bilgilendirici ve SEO uyumlu bir blog yazısı hazırla.

                Kurallar:
                - Bir adet "title" üret.
                - Uzun, detaylı ve tamamen HTML etiketleriyle yazılmış bir "content" üret.
                - Google görsellerden geçerli bir resim bul ve linkini "imageURL" değerine koy. (Unsplash KULLANMA.)
                - Ürettiğin içerikte gün, ay, yıl veya herhangi bir tarih GEÇMEYECEK.
                - Nasıl iyi bilgisayarcı olunur gibi şeyler yazabilirsin
                - bilgisayar parçaları hakkında konuşabilirsin
                - Sonuç SADECE aşağıdaki JSON formatında olacak, başka hiçbir açıklama yazmayacaksın:

                {
                "title": "Yazı Başlığı",
                "content": "HTML formatında uzun blog içeriği...",
                "imageURL": "Geçerli resim URL'si"
                }

                SADECE JSON FORMATINDA VER MARKDOWN FORMATINDA VERME`,
                `Sen, teknoloji ve yazılım konularında uzman bir blog yazarı gibi davran.
                Teknoloji, yazılım, programlama veya bilgisayar donanımı hakkında ilgi çekici, bilgilendirici ve SEO uyumlu bir blog yazısı hazırla.

                Kurallar:
                - Bir adet "title" üret.
                - Uzun, detaylı ve tamamen HTML etiketleriyle yazılmış bir "content" üret.
                - Google görsellerden geçerli bir resim bul ve linkini "imageURL" değerine koy. (Unsplash KULLANMA.)
                - Ürettiğin içerikte gün, ay, yıl veya herhangi bir tarih GEÇMEYECEK.
                - Nasıl iyi yazılımcı olunur gibi şeyler yazabilirsin
                - bilgisayar parçaları hakkında konuşabilirsin
                - Sonuç SADECE aşağıdaki JSON formatında olacak, başka hiçbir açıklama yazmayacaksın:

                {
                "title": "Yazı Başlığı",
                "content": "HTML formatında uzun blog içeriği...",
                "imageURL": "Geçerli resim URL'si"
                }

                SADECE JSON FORMATINDA VER MARKDOWN FORMATINDA VERME`,
            ]

            let random = Math.floor(Math.random() * subject.length) + 1;

            return subject[random];
        } catch (error) {
            
        }
    }
}