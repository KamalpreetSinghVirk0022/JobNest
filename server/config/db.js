import mongoose from "mongoose";

// Function to connect to MongoDB

const connectDb=async()=>{

    mongoose.connection.on('connected',()=>console.log('Datbase Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/JobNest`)
}


export default connectDb;