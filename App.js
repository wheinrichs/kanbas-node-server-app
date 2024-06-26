import express from "express";
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import Exam from "./Lab5/Exam/index.js"
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/Quiz/routes.js";
import QuizQuestionRoutes from "./Kanbas/Quizzes/QuizQuestions/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import QuizGradesRoute from "./Kanbas/Quizzes/QuizGrades/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-su1"
mongoose.connect(CONNECTION_STRING);

const app = express(); // Sets up the express
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
); // sets up the security so the browser on one server can talk to this server on another port

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,

};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    maxAge: 1000 * 60 * 60 * 24, // Session max age in milliseconds (e.g., 1 day)
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

if (process.env.NODE_ENV === "production") {
  sessionOptions.proxy = true; // Trusting the first proxy
}

app.use(session(sessionOptions));

app.use(express.json()); // Sets up the http request body

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
QuizRoutes(app);
QuizQuestionRoutes(app);
Exam(app);
EnrollmentRoutes(app);
QuizGradesRoute(app);

app.listen(process.env.PORT || 4000); // Its either the env port or the local port is env isnt defined
