import mongoose, { mongo } from "mongoose";

const options= { dbName: "next_post" }

const dbConnect= async ()=> mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, options)

export default dbConnect