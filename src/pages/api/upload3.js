import {createRouter, expressWrapper, createEdgeRouter} from "next-connect"
//import nc from "next-connect"
import mongoose from "mongoose";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";


const handler= new createRouter()

console.log(handler)


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

const uploadFile= upload.single("file")


handler.use(async (req, res)=> {
   const start= Date.now()
   const end= Date.now()
   console.log(`Request took ${end - start}ms` )
}).get((req, res)=> {
   return res.send("hello!!!")
})


handler.use(uploadFile)

export default handler.post((req, res)=> {
   console.log("req file: ", req.file)
   console.log("req body: ", req.body)
   res.status(200).send("uploaded file")
})


//export default handler