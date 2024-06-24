import mongoose from "mongoose"
const moduleSchema = new mongoose.Schema({
    name: String,
    description: String,
    course: {type: String, required: true},
},
{collection: "modules"}
);
export default moduleSchema;