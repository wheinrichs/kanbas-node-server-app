import model from "./model.js";

export const findAllGrades = () => {
    return model.find();
}

export const findGradesByUser = (userID) => {
    return model.find({ userID: userID});
}

export const findGradesByQuiz = (quizID) => {
    return model.find({ quizID: quizID});
}

export const addGrade = (grade) => {
    delete grade._id;
    return model.create(grade);
}

export const editGrade = (gradeID, grade) => {
    return model.updateOne({_id: gradeID}, { $set: grade});
}