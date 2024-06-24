import model from "./model.js";

export const addModule = (module) => {
    delete module._id;
    return model.create(module);
}

export const findAllModules = () => {
    return model.find();
}

export const findModulesByCourse = (courseId) => {
    return model.find({ course: courseId });
}
export const editModule = (moduleID, module) => {
    return model.updateOne({ _id: moduleID }, { $set: module }); 
}
export const deleteModule = (moduleId) => {
    return model.deleteOne({_id: moduleId});
}
