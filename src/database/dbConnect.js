import mongoose, { mongo } from "mongoose";

const options= { 
   dbName: "next_post",
   useNewUrlParser: true,
   useUnifiedTopology: true
}

const dbConnect= async ()=> mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, options)

export default dbConnect