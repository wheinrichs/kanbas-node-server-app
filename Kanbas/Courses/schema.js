import mongoose from "mongoose"
const coursesSchema = new mongoose.Schema({
    name: {type: String},
    number: {type: String},
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    description: String,
    image: String,
    author:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
      },
},
{collection: "courses"});
export default coursesSchema;