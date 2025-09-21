import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/db.js';


// Initialize Express app

const app= express()

//Connect to Database

await connectDb()


//Middlewares

app.use(cors())
app.use(express.json())

//Routes

app.get('/', (req,res)=>res.send("API Working"))


//Port

const PORT =process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})