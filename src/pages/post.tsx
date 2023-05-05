import axios from "axios"
import { useEffect, useState } from "react"
import PostView from "@/components/Post"


export default function postTeste() {
   const [posts, setPosts]= useState([])
   const postView= PostView

   const data = [ 
      {
         _id: "6440a5ebdb6b46fb2928a1a0",
         content: "lerem",
         autor: "Diana",
         id: "15",
         date_created: new Date(2023, 10, 5).toISOString(),
         date_updated: new Date(2023, 10, 5).toISOString(),
      }
   ];

   useEffect(()=> {
      const fetchData= async ()=> {
         await axios.get('/api/posts')
         .then((response)=> {
            setPosts(response.data)
         })
         .catch((error)=> {
            console.log(error)
         })
      }

      fetchData()
   }, [])

   // console.log("props... ")
   // console.log(data[0])
   
   return (
      <div>{postView(data[0])}</div>
   )
}