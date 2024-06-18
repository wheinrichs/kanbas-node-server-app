import mongoose from "mongoose"
const quizzes = new mongoose.Schema({
    title: String,
    points: String,
    courseID: {type: String, required: true},
    available_date: Date,
    due_date: Date,
    instructions: String,
    type: {type: String, default: "gradedQuiz"},
    assignmentGroup: {type: String, default: "quizzes"},
    shuffle: {type: Boolean, default: true},
    time_limit: {type: Boolean, default: true},
    time: {type: String, default: "20"},
    attempts: {type: Boolean, default: false},
    until_date: Date,
    show_correct_answers: {type: Boolean},
    one_at_a_time: {type: Boolean, default: true},
    webcam: {type: Boolean, default: false},
    lock_after: {type: Boolean, default: false},
    access_code: String
},
{collection: "quizzes"}
);
export default quizzes;