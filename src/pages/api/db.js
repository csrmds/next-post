import dbConnect from "@/database/dbConnect"
import PostCollection from "@/database/models/postModelDb"



export default async function addPost(req, res) {

   try {
      await dbConnect()
      
      const post= await PostCollection.create(req.query)

      return res.json(post)

   } catch (error) {
      return res.status(400).json(error)
   }
 
   
}