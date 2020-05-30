const express = require("express");
const projectsRouter = require("./projectRoutes");
const server = express();
const cors = require("cors")

server.use(express.json());
server.use(cors());

server.use('/api/projects', projectsRouter);


module.exports = server;
