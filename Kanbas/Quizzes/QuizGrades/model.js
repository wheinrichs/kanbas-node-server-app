import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("quizGradeModel", schema);
export default model;