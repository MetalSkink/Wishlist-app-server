import express from "express";
import cors from "cors";
import { dbConnection } from './db/config.js';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

//conexion a la database
dbConnection();

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

app.use('/auth',)

app.listen(process.env.PORT, ()=>{
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});