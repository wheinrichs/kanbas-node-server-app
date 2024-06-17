export default function Exam(app) {
    // app.get("/Exam/welcome", (req, res) => {
    //     res.send("Welcome to Exam");
    //   });

    app.get("/Exam/:oiu", (iuy, ytr) => {
      const uyt = iuy.params.oiu;
      const tre = "Hello " + uyt;
      ytr.json(tre);
   })

      app.post("/Exam/todos", (req, res) => {
        const newTodo = { ...req.body, id: new Date().getTime() };
        todos.push(newTodo);
        res.json(newTodo);
      });

      app.delete("/Exam/todos/:id", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    
        if (todoIndex === -1) {
          res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
          return;
        }
    
        todos.splice(todoIndex, 1);
        res.sendStatus(200);
      });

      app.put("/Exam/:id", (req, res) => {
        const { id } = req.params;
    
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
          res.status(404).json({ message: `Unable to update Todo with ID ${id}` });
          return;
        }
    
    
        todos = todos.map((t) => {
          if (t.id === parseInt(id)) {
            return { ...t, ...req.body };
          }
          return t;
        });
        res.sendStatus(200);
      });
}