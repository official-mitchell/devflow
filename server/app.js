const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// require('dotenv/config');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// Home Route
app.get("/", (req, res) => {
  res.send("Home page");
});

// Routers
// const exercisesRouter = require("./routes/exercises");
// const usersRouter = require("./routes/users");
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);
// app.use("/exercises", exercisesRouter);
// app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
