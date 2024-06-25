import model from "./model.js";

export const findAllCourses = () => {
    // Use the model to find all results
    return model.find();
}

export const deleteCourse = (courseID) => {
    return model.deleteOne({_id: courseID});
}

export const addCourse = (course) => {
    delete course._id; // remove _id field just in case client sends it
    return model.create(course);
}

export const editCourse = (courseID, course) => {
    return model.updateOne({ _id: courseID }, { $set: course }); // $set updates the fields that match the passed in object
}

export function findCoursesByAuthor(author) {
    return model.find({author});
}