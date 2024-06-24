import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
import UserRoutes from "./Kanbas/User/routes.js";
import session from "express-session";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/Kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
        credentials: true   
    }));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "Kanbas",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV !== "development", // true in production, false in development
        httpOnly: true, // Helps prevent cross-site scripting (XSS) attacks
        sameSite: process.env.NODE_ENV !== "development" ? 'none' : 'lax' // Required for cross-origin cookies
    }
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
if (process.env.NODE_ENV === "production") {
    sessionOptions.proxy = true; // Trusting the first proxy
}

app.use(session(sessionOptions)
);
      
app.use(express.json()); // Ensure all work is done after this line


Lab5(app);
UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);


app.options('*', cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT);