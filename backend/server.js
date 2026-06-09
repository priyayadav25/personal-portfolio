const express = require("express");
const projects = require("./database");

const app = express();

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
    res.json(projects);
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
