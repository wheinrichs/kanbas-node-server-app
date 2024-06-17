import mongoose from "mongoose"
const quizzes = new mongoose.Schema({
    title: String,
    points: String,
    courseID: {type: String, required: true},
    available_dat: Date,
    due_date: Date
},
{collection: "quizzes"}
);
export default quizzes;