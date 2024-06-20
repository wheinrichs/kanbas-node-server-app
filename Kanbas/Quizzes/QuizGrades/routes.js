import * as dao from "./dao.js";
export default function QuizGradesRoute(app) {
  app.get("/api/quizgrades", async (req, res) => {
    const grades = await dao.findAllGrades();
    res.json(grades);
  });

  app.get("/api/quizgrades/byuser/:uid", async (req, res) => {
    const { uid } = req.params;
    const grades = await dao.findGradesByUser(uid);
    res.json(grades);
  });

  app.get("/api/quizgrades/byquiz/:qid", async (req, res) => {
    const { qid } = req.params;
    const grades = await dao.findGradesByQuiz(qid);
    res.json(grades);
  });

  app.put("/api/quizgrades/:gradeid", async (req, res) => {
    const { gradeid } = req.params;
    const status = await dao.editGrade(gradeid, req.body);
    res.json(status);
  });

  app.post("/api/quizgrades", async (req, res) => {
    const newGrade = await dao.addGrade(req.body);
    res.json(newGrade);
  });
}
