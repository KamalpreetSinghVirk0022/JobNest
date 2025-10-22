import mongoose from "mongoose"

//function to connect to mongoDB

const connectDB = async () => {

    mongoose.connection.on('connected', ()=>console.log('MongoDB connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/JobNest`)

}

export default connectDB