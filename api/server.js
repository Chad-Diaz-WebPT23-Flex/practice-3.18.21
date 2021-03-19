const express = require("express");

const actionsRouter = require("./actions/actions-router.js");
const projectsRouter = require("./projects/projects-router.js");
const helmet = require("helmet");
const server = express();

server.use(helmet(), express.json());

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Server Up</h2>`);
});

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use((error, req, res, next) => {
  error.error && console.error(error.error);
  res.status(error.status).json({ message: error.message });
});

module.exports = server;
