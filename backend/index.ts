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

app.use('/auth/', userRouter);
app.use('/settings/', settingsRouter);

app.listen(PORT, () => {
    console.log(`server running on ${PORT} port`);
})