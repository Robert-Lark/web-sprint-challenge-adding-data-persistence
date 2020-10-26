const db = require("../data/config")

function getProjects() {
    return db("projects")
}
function getResources() {
	return db("resources");
}
function getTasks() {
    return db("tasks as t")
        .leftJoin("projects as p", "p.id", "t.projectId")
}
function createProject() {

}


module.exports = {
    getProjects,
    getResources,
    getTasks,
    createProject,
};