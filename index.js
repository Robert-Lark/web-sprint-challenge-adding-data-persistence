const express = require("express");
const projectsRouter = require("./router/projectRouter");
const welcomeRouter = require("./router/welcome")

const Projects = require("./models/projectsModels");
const server = express();
const port = 9000;

server.use(express.json());
server.use(welcomeRouter);
server.use(projectsRouter);



server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});