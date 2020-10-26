const express = require("express");
const db = require("../data/config");
const projects = require("../models/projectsModels");
const router = express.Router();

router.get("/projects", async (req, res, next) => {
	try {
		const project = await projects.getProjects();
		res.json(project);
	} catch {
		next(err);
	}
});

router.get("/resources", async (req, res, next) => {
	try {
		const resources = await Projects.getResources();
		res.json(resources);
	} catch {
		next(err);
	}
});

router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await projects.getTasks();
		res.json(tasks);
	} catch {
		next(err);
	}
});

router.post("/projects/", async (req, res, next) => {
	try {
        const [id] = await db("projects").insert(req.body);
        const newProject = await db("projects").where({ id }).first();
        res.status(201).json(newProject)
	} catch {
		next(err);
	}
});
router.post("/resources", async (req, res, next) => {
	try {
        const [id] = await db("resources").insert(req.body);
				const newResource = await db("resources").where({ id }).first();
				res.status(201).json(newResource);
	} catch {
		next(err);
	}
});
router.post("/tasks", async (req, res, next) => {
	try {
        const [id] = await db("tasks").insert(req.body);
				const newTask = await db("tasks").where({ id }).first();
				res.status(201).json(newTask);
	} catch {
		next(err);
	}
});

module.exports = router
