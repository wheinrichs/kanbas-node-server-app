import mongoose from "mongoose"
const quizGrades = new mongoose.Schema({
    userID: { type: String, required: true },
    quizID: { type: String, required: true },
    studentChoices: { type: mongoose.Schema.Types.Mixed },
    grade: Number
},
{collection: "quiz_grades"}
);
export default quizGrades;