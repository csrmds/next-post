import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import axios from "axios";



export default async function uploadFile(req, res) {

   const opa= req.body
   console.log("File: ", opa)

   // const connect= mongoose.createConnection(process.env.NEXT_PUBLIC_MONGODB_URI, {
   //    useNewUrlParser: true,
   //    useUnifiedTopology: true,
   // })

   const storage= new GridFsStorage({
      url: process.env.NEXT_PUBLIC_MONGODB_URI,
      db: "next_post",
      file: (req, opa)=> {
         if (opa.mimetype=== "image/jpeg") {
            console.log("storage func...")
            return { 
               bucketName: "post_photos",
               filename: 'file_'+Date.now() 
            }
         } else {
            console.log("storage func...2")
            return { 
               bucketName: "post_photos",
               filename: 'file__'+Date.now()
            }
         }
      }
   })

   const upload= multer({storage})

   // await axios.post('/api/upload3', upload.single('arquivo'))
   //    .then(response=> {
   //       console.log(response.data)
   //    })
   const response= await fetch('/api/upload3', upload.single('arquivo'))
   const data= await response.json()

   return res.status(200).json(data)

   //return res.status(200).json(upload)



}