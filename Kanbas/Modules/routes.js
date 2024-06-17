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

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.editModule(mid, req.body);
    res.json(status);
  });
}