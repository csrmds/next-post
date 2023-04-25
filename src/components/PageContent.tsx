import dynamic from "next/dynamic"
//import Feed from "./Feed";

const Header= dynamic(()=> import("./Header"), { ssr: false })
const Feed= dynamic(()=> import('./Feed'), { ssr: false })

export default function PageContent() {

   console.log("função PageContent")

   return (
      <>
         <Header />

         <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
            Lista de Posts
         </h2>
         
         <Feed/>
      </>
   );
}
