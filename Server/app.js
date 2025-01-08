import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDb from './db/db.js';
import userRouter from './routes/user-routes.js';
import driverRouter from './routes/driver-route.js';
import cookieParser from 'cookie-parser';

connectToDb();



const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/" ,(req,res) =>{
    res.send("<h1>Hello world</h1>");
});

app.use('/user', userRouter);
app.use('/driver', driverRouter);

export default app;
