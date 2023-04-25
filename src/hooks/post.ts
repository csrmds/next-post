import PostsModel from "@/model/post";
import nextPostDb from "@/database/dbConnect";

export default class PostsHook {

   #post: PostsModel
   #db: any
   #collection: any
   #response: any



   setAttributes(payload: {}) {
      this.#post.setAttributes(payload)
   }

   async save() {
      this.#db= await nextPostDb()
      this.#collection= await this.#db.collection('posts')

      this.#response= await this.#collection.insertOne({"content": "eita maravilha", "autor": "eu mesmo", "id": 47})

      return this.#response
   }


}