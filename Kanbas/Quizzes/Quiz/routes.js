import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  app.get("/api/quizzes", async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  });

  app.get("/api/quizzes/:cid", async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizByCourse(cid);
    res.json(quizzes);
  });

  app.post("/api/quizzes", async (req, res) => {
    const newQuiz = await dao.addQuiz(req.body);
    res.json(newQuiz);
  });

  app.put("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.editQuiz(qid, req.body);
    res.json(status);
  });
}
