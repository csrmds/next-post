import { format, parseISO } from "date-fns"

export default class PostsModel {
   #id: string
   #contentText: string
   #contentId: string
   #autor: string
   #dataCreated: string
   #dataModified: string
   #dataCreatedBr: string

constructor(
   id: string,
   contentText: string,
   contentId: string,
   autor: string,
   dataCreated: string,
   dataModified: string
) {
   this.#id= id
   this.#contentText= contentText
   this.#contentId= contentId
   this.#autor= autor
   this.#dataCreated= dataCreated
   this.#dataModified= dataModified
   this.#dataCreatedBr= ""
   //this.#dataCreatedBr= format(parseISO(dataCreated), 'dd/MM/yyyy')
}

get id() {
   return this.#id
}

get contentText() {
   return this.#contentText
}

get contentId() {
   return this.#contentId
}

get autor() {
   return this.#autor
}

get dataCreatedBr() {
   return this.#dataCreatedBr
}

get attributes() {
   return {
      contentText: this.#contentText,
      contentId: this.#contentId,
      autor: this.#autor,
      dataCreated: this.#dataCreated,
      dataModified: this.#dataModified,
      dataCreatedBr: this.#dataCreatedBr
   }
}


setAttributes(post: any) {
   this.#id= post.id
   this.#contentText= post.contentText
   this.#autor= post.autor
}

setData() {
   console.log("setData Post")
   this.#dataCreated= format(parseISO(this.#dataCreated), 'dd/MM/yyyy')
}

}