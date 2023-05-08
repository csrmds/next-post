import axios from "axios"


export default class PostModel {
   #id= null
   #contentText= null
   #contentId= null
   #autor= null
   #date_created= null
   #date_updated= null


   get id() {
      return this.#id
   }

   get autor() {
      return this.#autor
   }

   get attributes() {
      return {
         id: this.#id,
         contentText: this.#contentText,
         contentId: this.#contentId,
         autor: this.#autor,
         date_created: this.#date_created,
         date_updated: this.#date_updated
      }
   }

   get contentText() {
      return this.#contentText
   }

   setAttributes(payload) {
      this.#id= payload.id
      this.#contentText= payload.contentText
      this.#contentId= payload.contentId
      this.#autor= payload.autor
   }

   testeDb() {
      console.log("teste Db")
      
   }

   async save(payload) {
      
      console.log(payload)
     

      await axios.post('/api/db2', payload)
         .then(response=> {
            console.log("Data payload: ")
            console.log(payload)
            console.log("response.data: ")
            console.log(response.data)
            return response.data
         })
         .catch(err=> {
            console.error(err)
            return err
         })

   }

   async uploadFile(payload) {
      console.log("func uploadFile")

      await axios.post('/api/upload', payload)
         .then(response=> {
            console.log(response.data)
         })
         .catch(error=> {
            console.error(error)
         })
   }

}