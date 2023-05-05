import { BSONSymbol } from "mongodb";
import { Schema, model, models } from "mongoose";


const PostSchema= new Schema({
   contentText: String,
   autor: String,
   id: Number,
   date_created: {type: Date, default: Date.now},
   date_updated: {type: Date, default: Date.now}
})

const photoSchema= new Schema({
   postId: Object,
   order: Number,
   typeFile: String,
   file: String,
   caption: String,
   date_created: {type: Date, default: Date.now},
   date_updated: {type: Date, default: Date.now}
})



const PostCollection= models.posts || model('posts', PostSchema)

export const PhotoCollection= models.attachments || model('attachments', photoSchema)

export default PostCollection


