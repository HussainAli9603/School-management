const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const quiz = require("./routes/quizRoute");
const results = require("./routes/resultsRoute");
const students = require("./routes/studentsRoute");
const calander = require("./routes/calanderRoute");
const courses = require("./routes/coursesRoute");
const classes = require("./routes/classesRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", quiz);
app.use("/api/v1", results);
app.use("/api/v1", students);
app.use("/api/v1", calander);
app.use("/api/v1", courses);
app.use("/api/v1", classes);
app.use("/api/v1", user);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
