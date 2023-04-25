import format from "date-fns/format"
import parseISO from "date-fns/parseISO"
import { useEffect, useState } from "react"
import PostsModel from "@/model/post"

export default function Post(props: any) {
   console.log("função Post...")
   console.log(props.date_created)

   //const post= new PostsModel(props._id, props.content, "", props.autor, props.date_created, "")

   var data=  format(parseISO(props.date_created), 'dd/MM/yyyy')
   // const x= parseISO(props.date_created)
   // console.log("X: "+typeof(x))
   // console.log(x)
   // console.log("props_date type: "+typeof(props.date_created))
   // const y= format(parseISO(props.date_created), 'dd/MM/yyyy')
   // console.log("Y: "+typeof(y))
   // console.log(y)
   
   // console.log(post)
   
   

   return (
      <div className="flex flex-col items-center justify-center bg-neutral-600">
         
         <div className="items-start mb-4 bg-red-300 w-2/4">
            <p>{props.date_created} - {data}</p>
         </div>

         <div  className="mb-4">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                  <img
                     className="rounded-t-lg"
                     src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                     alt=""
                  />
               </a>
               <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                     {props.autor}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                     {props.content}
                  </p>
               </div>
            </div>
         </div>

      </div>
   )
}