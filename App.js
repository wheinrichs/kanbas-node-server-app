import express from 'express';
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js"
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors"
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";




const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-su1"
mongoose.connect(CONNECTION_STRING);

const app = express(); // Sets up the express
app.use(cors()); // sets up the security so the browser on one server can talk to this server on another port
app.use(express.json()); // Sets up the http request body

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);


app.listen(process.env.PORT || 4000) // Its either the env port or the local port is env isnt defined