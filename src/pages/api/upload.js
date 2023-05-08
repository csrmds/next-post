import dbConnect from "@/database/dbConnect"
import PostCollection from "@/database/models/postModelDb"
import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import App from "next/app";
import path from "path";


export default async function uploadFile(req, res) {

   //console.log("alguma coisa..")
   //console.log("req body: ", req.body)
   //await dbConnect()
   const file= req.body
   console.log("File: ", file)

   const connect= mongoose.createConnection(process.env.NEXT_PUBLIC_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })

   let gfs;

   connect.once("open", ()=> {
      //console.log("conexão estabelecida...")
      gfs= new mongoose.mongo.GridFSBucket(connect.db, {
         bucketName: "post_photos"
      })
   })
   

   const storage= new GridFsStorage({
      url: process.env.NEXT_PUBLIC_MONGODB_URI,
      db: "next_post",
      file: (req, file)=> {
         return new Promise((resolve, reject)=> {
            crypto.getRandomValues(16, (err, buf)=> {
               if (err) {
                  return reject(err)
               }
               const filename= buf.toString("hex")+ path.extname(file.originalname)
               const fileInfo= {
                  filename: filename,
                  bucketName: "post_photos"
               }
               resolve(fileInfo)
            })
         })
      }
   })

   const upload= multer({ storage })

   

   try {
      await axios.post('/api/upload2', upload.single('file'), (req, res))
         .then((response)=> {
            console.log(response.data)
            return response.data
         })
      
   } catch (error) {
      return res.json(error)
   }

}