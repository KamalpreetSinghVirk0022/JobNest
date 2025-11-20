import './config/instrument.js'

import express from 'express'

import cors from 'cors'

import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import { connect } from 'mongoose'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express'


//Initialze express

const app=express()


//Connect to database

await connectDB()
await connectCloudinary()

//Middlewares

app.use(
  cors({
    origin: [
      "https://job-nest-snowy.vercel.app", // <-- Replace with actual deployed frontend URL
      "http://localhost:5000",            // <-- Keep for local development
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, // Only if you're sending cookies/auth headers
  })
);

app.use(express.json())
app.use(clerkMiddleware())

//Routes

app.get('/',(req,res)=>res.send("API IS WORKING"))

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks)
app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)


//Port

const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})