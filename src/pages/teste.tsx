//import Header from "@/components/Header"
import Feed from "@/components/Feed"
import axios from "axios"
import dynamic from "next/dynamic"

//const Header= dynamic(()=> import("@/components/Header"), {ssr: false}  )

export async function getStaticProps() {
   //const data= await axios('https://jsonplaceholder.typicode.com/todos')
   const data= await fetch('http://localhost:3000/api/posts')
   const todos= await data.json()

   //console.log(todos)
   return {
      props: { todos }
   }
}

export default function Teste(props) {
   const cesar= props.todos
   console.log(cesar)

   return (
      <>
         {/* <Header/> */}
         
         <div><h1>Pagina de teste</h1>
         

         {cesar.map((todo)=> (
            <p key={todo._id}>{todo.autor} - {todo._id}</p>
         ))}
         </div>
         
      </>
      
   )
}