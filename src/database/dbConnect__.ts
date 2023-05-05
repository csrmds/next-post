import { MongoClient } from "mongodb"

const uri= process.env.NEXT_PUBLIC_MONGODB_URI   
const client= new MongoClient(uri)


export default async function nextPostDb() {
   
   await client.connect()
   const nextPostDb= await client.db("next_post")

   return nextPostDb
   
}