import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
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
import path from "path";

app.use('/auth/', userRouter);
app.use('/settings/', settingsRouter);
app.use('/api/', apiRouter);
app.use('/projects/', projectsRouter);
app.use('/skills/', skillsRouter);
app.use('/certificates/', certificatesRouter);

app.use('/', express.static(path.join(__dirname, "uploads")))


app.listen(PORT, () => {
    console.log(`server running on ${PORT} port`);
})