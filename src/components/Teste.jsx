import { useState } from "react";
import PostModel from "../model/postModel";


export default function Teste() {
   const [contentText, setContentText]= useState("")
   const [autor, setAutor]= useState("")

   const post= new PostModel()

   async function testeA() {
      console.log("teste A")
      const res= await post.save({contentText, autor})
      console.log(res)
   }

   function testeB() {
      console.log("teste B")
      console.log(post.attributes)
   }

   return (
      <div className="flex flex-col items-center justify-center bg-slate-400 ">
         <div className="my-2">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
               <div className="flex justify-between border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div>
                     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        <p>Título</p>
                     </h5>
                  </div>
               </div>

               <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                  <img className="" src="" alt="" />
               </a>

               <div className="p-2 bg-gray-200">
                  <div className="relative mb-3" data-te-input-wrapper-init>
                     <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Autor"
                        onChange={(e)=> setAutor(e.target.value)}
                     />
                     <label
                        htmlFor="exampleFormControlInput1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                     >
                        
                     </label>
                  </div>

                  <div className="relative mb-3" data-te-input-wrapper-init>
                     <textarea
                        className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        onChange={(e) => setContentText(e.target.value)}
                     ></textarea>
                     <label
                        htmlFor="exampleFormControlTextarea1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                     >
                        
                     </label>
                  </div>
               </div>

               <div className="flex border-t-2 justify-center border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 mx-2 shadow-xl hover:cursor-pointer">
                     <p>Foto</p>
                  </div>
                  <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 mx-2 shadow-xl hover:cursor-pointer">
                     <p>Anexo</p>
                  </div>
                  <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 mx-2 shadow-xl hover:cursor-pointer">
                     <p>video</p>
                  </div>
               </div>
               <div className="flex border-t-2 justify-center border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                  <div className="max-w-xs mx-2 shadow-xl hover:cursor-pointer">
                     <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={() => testeA()}
                     >
                        Teste A
                     </button>
                  </div>

                  <div className="max-w-xs mx-2 shadow-xl hover:cursor-pointer">
                     <button
                        onClick={() => testeB()}
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                     >
                        Teste B
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );


}