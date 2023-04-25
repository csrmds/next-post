import axios from "axios"
import { useEffect, useState } from "react"
import PostView from "@/components/Post"
import format from "date-fns/format"
import parseISO from "date-fns/parseISO"






export default function Feed() {
   const [posts, setPosts]= useState([])   
   const post= PostView
   
   console.log("função Feed..")

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

   // const fetchData= async()=> {
   //    const data= await axios.get('/api/posts')
   //       .then((response)=> {
   //          setPosts(response.data)
   //       }).catch((error)=> {
   //          console.log(error)
   //       })
   // }

   // fetchData()
   

   // useEffect(()=> {
   //    async function vai() {
   //       console.log("chamou async...")
   //       const data= await fetch('/api/posts')
   //       const todos= await data.json()
   //       setPosts(todos)
   //    }

   //    vai()
   // },[])


   // useEffect(()=> {
   //    console.log("executou useEffect...")
   //    async function fetchData() {
   //       await axios.get('/api/posts')
   //       .then((response)=> {
   //          setPosts(response.data)
   //       })
   //       .catch((error)=> {
   //          console.log(error)
   //       })
   //    }
      
   //    fetchData()
   // },[])
   
   
   return (
      <>
      
         <p>Data: {}</p>
         <p>Formatado: {}</p>

         { posts.map((item)=> (
            <div key={item._id}>
               {post(item)}
            </div>
            
         ))}
         
         
      </>
   )


}