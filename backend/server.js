const express = require("express");

const app = express();

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    technology: "HTML, CSS, JavaScript"
  }
];

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
