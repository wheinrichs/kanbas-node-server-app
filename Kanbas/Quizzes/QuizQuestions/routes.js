import * as dao from "./dao.js";
export default function QuizQuestionRoutes(app) {
  app.get("/api/questions", async (req, res) => {
    const questions = await dao.findAllQuestions();
    res.json(questions);
  });

  app.get("/api/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params;
    const questions = await dao.findQuestionsByQuiz(qid);
    res.json(questions);
  });

  app.post("/api/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params;
    const newQuestion = await dao.addQuestion(req.body);
    res.json(newQuestion);
  });

  app.put("/api/quizzes/:qid/questions/:questionid", async (req, res) => {
    const { qid, questionid } = req.params;
    const status = await dao.editQuestion(questionid, req.body);
    res.json(status);
  });
}
