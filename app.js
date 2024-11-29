import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/reprobados.controller.js";

dotenv.config();
mongoose.connect(process.env.url_bd)

.then(()=>{
    console.log("Si jalo la conexion")
})
.catch((error)=>{
    console.log("No jalo la conexion",error)
})

const app = express();

app.use(cors());

app.listen(4000, ()=>{
    console.log("Se escucha correctamente el servidor")
})

test()