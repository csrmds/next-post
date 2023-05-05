import axios from "axios"
import { useEffect, useState } from "react"
import PostView from "@/components/Post"
import PostEdit from "./PostEdit"
import format from "date-fns/format"
import parseISO from "date-fns/parseISO"



export default function Feed() {
   const [posts, setPosts]= useState([])   
   const post= PostView
   
   //console.log("função Feed..")

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

   
   
   return (
      <>
         <PostEdit />
         { posts.map((item)=> (
            <div key={item._id}>
               {post(item)}
            </div>
            
         ))}
         
         
      </>
   )


}