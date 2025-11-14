import { Schema, model } from "mongoose";


const schema = new Schema({
    id:{
        type:String,
        default:"default"
    },
    name:{
        type:String,
        default:"İbrahim Halil Sezgin"
    },
    role:{
        type:String,
        default: "Full-Stack Developer"
    },
    aboutme:{
        type:String,
        default:'Küçüklüğümden beri bilgisayarlara olan ilgim, beni yazılım bölümüne yöneltti. Lise hayatıma başlamadan önce kendi çapımda JavaScript ve Node.js öğrendim. Zamanla bu alanda başarılı olduğumu hissettim. Zeytinburnu Mesleki ve Teknik Anadolu Lisesi’ne başladığımda, alan olarak Bilişim Teknolojilerini; dal olarak ise Yazılım Geliştirmeyi seçtim. Devam eden Lise hayatım boyunca, algoritmalar başta olmak üzere sırasıyla Python, C# ile masaüstü program geliştirme, HTML, CSS, Bootstrap, .NET ve .NET MVC, SQL öğrendim. Aktif Olarak DOS INDUSTRIES şirketinde Stajyer Öğrenci olarak çalışıyorum.'
    },
    github:{
        type:String,
        default:"https://github.com/ibrahimhalilsezgin"
    },
    linkedin:{
        type:String,
        default:"https://www.linkedin.com/in/ibrahimhalilsezgin"
    },
    instagram:{
        type:String,
        default: "https://instagram.com/ibrhmhl"
    },
    twitter:{
        type:String,
        default:""
    },
    facebook:{
        type:String,
        default:""
    },
    experience:{
        type:String,
        default:"50"
    },
    projectCount:{
        type:String,
        default:"10"
    },
    happyClients:{
        type:String,
        default:"100"
    }
});

export default model('about', schema);