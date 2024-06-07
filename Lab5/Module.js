const module = {
    id: 1,
    name: "Welcome to wedev",
    description: "Review the sylabus and install all programs.",
    course: "CS5610",
  };
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
        res.json(module);
      });
      app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
      });
      app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });
  }
