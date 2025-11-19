import express, { Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";


const app = express();
const PORT = process.env.PORT || 3000;


import {connectDB} from "./db/connect"

connectDB();
app.use(cors({
    origin:['http://localhost:5173','http://localhost:4173','https://ibo.rocks'],
    methods:['GET', 'POST']
}))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
import userRouter from "./modules/user/user.router";
import settingsRouter from "./modules/settings/settings.router";
import apiRouter from "./modules/api/api.router";
import projectsRouter from "./modules/projects/projects.router";
import skillsRouter from "./modules/skills/skills.router";
import certificatesRouter from "./modules/certificates/certificates.router";
import aboutRouter from "./modules/aboutme/about.router";
import contactRouter from "./modules/contact/contact.router";
import blogRouter from "./modules/blog/blog.router";
import CollectedData from "./db/models/CollectedData";

app.use('/auth/', userRouter);
app.use('/settings/', settingsRouter);
app.use('/api/', apiRouter);
app.use('/projects/', projectsRouter);
app.use('/skills/', skillsRouter);
app.use('/certificates/', certificatesRouter);
app.use('/about/', aboutRouter);
app.use('/contact/', contactRouter);
app.use('/blog/', blogRouter);

app.use('/', express.static(path.join(__dirname, "uploads")))

app.get('/', (req, res) => {
    res.status(200).send('ok')
})
app.post('/collect', async (req, res) => {
        const ip =
        req.headers['cf-connecting-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress;
        const data = await CollectedData.findOne({id:'default'});
        if(!data) return;
        console.log(data.ip.includes(ip as string))
        if(data.ip.includes(ip as string)) return;
        await CollectedData.findOneAndUpdate({id:'default'}, {
            $push: {
                ip: ip
            }
        });
        console.log(ip)
        return res.status(200);
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT} port`);
})