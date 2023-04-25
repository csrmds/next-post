//import PageContent from "../components/PageContent"
import dynamic from "next/dynamic"

//const PageContent= dynamic(()=> import("@/components/PageContent"), { ssr: false })

const Header= dynamic(()=> import("@/components/Header"), { ssr: false })
const Feed= dynamic(()=> import('@/components/Feed'), { ssr: false })

export default function Home() {


   return (
      <>
         <Header/>
         <Feed/>
      </>
   )
}
