import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRoute.js';
import authRoute from './Routes/authRoute.js';
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to Mongodb'); 
}).catch((error) => {
    console.log(error);
})


const app = express();

app.use(express.json());


app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRoute)