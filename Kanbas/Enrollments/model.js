import mongoose from "mongoose";
import enrollmentSchema from "./schema.js";

const model = mongoose.model("enrollmentModel", enrollmentSchema);
export default model;