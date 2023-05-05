import dbConnect from "@/database/dbConnect"
import PostCollection from "@/database/models/postModelDb"


export default async function addPost(req, res) {

   try {
      await dbConnect()
      
      console.log("req query:", req.method)
      console.log("req.query: ", req.query)
      console.log("req.body: ", req.body)
      console.log("req.data: ", req.data)
      //const post= await PostCollection.find({autor: 'Janaina pereira'})
      const post= await PostCollection.create(req.body)

      

      return res.status(200).json(post)

   } catch (error) {
      return res.status(400).json(error)
   }
 
   
}