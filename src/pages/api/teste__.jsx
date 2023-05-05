import nextPostDb from "../../functions/dbConnect"


export default async function dbConnect(req, res) {

   
   const db= await nextPostDb()

   const collection= await db.collection("posts")

   const data= [
      {
         "content": "lerem",
         "autor": "Diana",
         "id": "15"
   },
   {
         "content": "texto",
         "autor": "Mariana",
         "id": "33"
   },
   {
         "content": "abobora",
         "autor": "Julio",
         "id": "87"
   },
   {
         "content": "manga rosa",
         "autor": "Marcos",
         "id": "12"
   },
   {
         "content": "contradição",
         "autor": "Olavo",
         "id": "11"
   },
   {
         "content": "chama papae",
         "autor": "Janaina",
         "id": "90"
   }]

   //const result= await collection.insertMany(data)

   

   const result= await db.collection("posts").find().toArray()
  
   

   return (
      res.status(200).json({
         result
      })
   )
}