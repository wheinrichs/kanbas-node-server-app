import mongoose from "mongoose"
const quizQuestions = new mongoose.Schema({
    quizID: { type: String, required: true },
    type: String,
    title: String,
    points: String,
    question: String,
    choices: { type: mongoose.Schema.Types.Mixed },
    answers: { type: mongoose.Schema.Types.Mixed },
    editing: String,
},
{collection: "quiz_questions"}
);
export default quizQuestions;