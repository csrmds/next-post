import format from "date-fns/format"
import parseISO from "date-fns/parseISO"
import { useEffect, useState } from "react"
import PostsModel from "@/model/post"
import { IconLike, IconDeslike, IconComment } from "./Icons"

export default function Post(props: any) {
   // console.log("função Post...")
   // console.log(typeof(props.date_created))
   // console.log(props.date_created)
   // console.log("parseISO")
   // console.log(parseISO(props.date_created))

   //const post= new PostsModel(props._id, props.content, "", props.autor, props.date_created, "")

   var data=  format(parseISO(props.date_created), 'dd/MM/yyyy')
   
   
   

   return (
      <div className="flex flex-col items-center justify-center bg-neutral-600">
         <div className="items-start mb-4 bg-red-300 w-2/4">
            <p>
               {props.date_created} - {data}
            </p>
         </div>

         <div className="mb-4">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div className="flex justify-between border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div>
                     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {props.autor}
                     </h5>
                  </div>
                  <div>
                     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        <small>post:</small> {data}
                     </h5>
                  </div>
               </div>

               <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                  <img
                     className="h-96"
                     src="https://picsum.photos/400"
                     alt=""
                  />
               </a>

               <div className="p-6">
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                     {props.content}
                  </p>
               </div>

               <div className="flex border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 mx-2 shadow-xl hover:cursor-pointer">
                     {IconLike}
                  </div>
                  <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 mx-2 shadow-xl hover:cursor-pointer">
                     {IconDeslike}
                  </div>
                  <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 mx-2 shadow-xl hover:cursor-pointer">
                     {IconComment}
                  </div>
                  
                  
               </div>
            </div>
         </div>
      </div>
   );
}