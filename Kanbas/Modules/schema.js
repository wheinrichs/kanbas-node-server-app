import mongoose from "mongoose"
const moduleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    course: {type: String, required: true},
},
{collection: "modules"}
);
export default moduleSchema;