import model from "./model.js";

export const findAllModules = () => {
    return model.find();
}

export const findModulesByCourse = (courseId) => {
    return model.find({ course: courseId });
}

export const deleteModule = (moduleId) => {
    return model.deleteOne({_id: moduleId});
}

export const addModule = (module) => {
    delete module._id;
    return model.create(module);
}