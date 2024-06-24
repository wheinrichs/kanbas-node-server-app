import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: {type: String, unique: true},
  author: String,
  year: Number,
  genre: String,
  pages: Number
}, {collection: "book"});
export default { bookSchema };