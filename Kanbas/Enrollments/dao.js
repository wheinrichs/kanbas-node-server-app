import model from "./model.js"

export const createEnrollment = (enrollment) => model.create(enrollment);  
export const findAllEnrollments = () => model.find();
export const findEnrollmentsByStudent = (student) => model.find({ student }).populate("course");
export const findEnrollmentsByCourse = (course) => model.find({course}).populate("student");
export const unenrollStudentFromCourse  = (student,course) => model.deleteOne({ student,course});