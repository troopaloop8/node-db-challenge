const db = require("../database.js");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask,
};

//*****CRUD HELPERS*****//

//READ HELPERS

function getProjects() {
  return db("projects");
}

function getResources(id) {
  if (id) {
    return db("resources").where({ id });
  } else {
    return db("resources");
  }
}

function getTasks(id) {
  if (id) {
    return db("tasks").where({ id });
  } else {
    return db("tasks");
  }
}

//ADVANCED READ HELPERS

function getTasksByProjectId(id) {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .where({ "p.id": id });
}

function getResourcesByProjectId(id) {
  return db("projects as p")
    .join("project_resources as pr", "p.id", "pr.project_id")
    .join("resources as r", "pr.resource_id", "r.id")
    .where({ "p.id": id });
}

//CREATE HELPERS

function addProject(project) {
  return db("projects").insert(project, "id");
}

function addResource(resource) {
  return db("resources").insert(resource, "id");
}

function addTask(task) {
  return db("tasks").insert(task, "id");
}
