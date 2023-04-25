import nextPostDb from "@/database/dbConnect"

export default async function LoadPosts(req, res) {
   const db= await nextPostDb()
   const result= await db.collection('posts').find().toArray()

   return res.status(200).json(result)
}