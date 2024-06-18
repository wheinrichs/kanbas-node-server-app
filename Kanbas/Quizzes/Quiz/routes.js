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

  app.get("/api/quizzes/byQID/:qid", async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizByID(qid);
    res.json(quiz);
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

  app.delete("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.json(status);
  });
}
