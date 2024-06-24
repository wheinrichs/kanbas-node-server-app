import * as dao from './dao.js';

export default function CourseRoutes(app) {
  app.post("/api/courses", async (req, res) => {
    const currentUser = req.session.currentUser;
    if(!currentUser) {
      res.sendStatus(401);
      return;
    }
    const course = await dao.createCourse({
      ...req.body, author: currentUser._id,
    });
    res.send(course);
  });
  app.get("/api/courses/published", async (req, res) => {
    const currentUser = req.session.currentUser;
    if(!currentUser) {
      res.send([])
      return;
    }
    const courses = await dao.findCoursesByAuthor(currentUser._id);
    res.send(courses);
  });
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
  app.put("/api/courses/:cid", async (req, res) => {
    const { cid } = req.params;
    const course = req.body;
    const status = await dao.editCourse(cid, course);
    res.send(status);
  });
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.send(status);
  });
}