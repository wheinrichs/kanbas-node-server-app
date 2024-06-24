import mongoose from "mongoose";
import { bookSchema } from "./bookSchema.js";
const bookModel = mongoose.model("books", bookSchema);
export default bookModel;