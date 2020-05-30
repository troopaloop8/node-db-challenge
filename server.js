const express = require("express");
const projectsRouter = require("./projectRoutes");
const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);


module.exports = server;
