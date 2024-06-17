import mongoose from "mongoose"
const quizQuestions = new mongoose.Schema({
    quizID: { type: String, required: true },
    type: String,
    title: String,
    points: String,
    question: String,
    choices: [String],
    answers: [String]
},
{collection: "quiz_questions"}
);
export default quizQuestions;