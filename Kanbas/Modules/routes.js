import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const newModule =  await dao.addModule(req.body);
    res.json(newModule);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  });

  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex(
      (m) => m._id === mid);
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });

}
