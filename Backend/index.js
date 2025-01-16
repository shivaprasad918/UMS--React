import express from "express";
import userRoute from "./Routes/userRoute.js"
import adminRoute from "./Routes/adminRoute.js"
import mongoose, { get } from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB Compass");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });


const app = express();

app.use(express.json());
app.use(cors()); 
app.use("/Public/upload", express.static(path.join(__dirname, "/Public/upload")));

app.use('/api/auth', userRoute); 


app.use('/admin',adminRoute)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



