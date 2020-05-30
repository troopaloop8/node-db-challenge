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
};

function getResources(id) {
  if (id) {
    return db("resources").where({ id });
  } else {
    return db("resources");
  };
};

function getTasks(id) {
  if (id) {
    return db("tasks").where({ id });
  } else {
    return db("tasks");
  };
};



//CREATE HELPERS

function addProject(project) {
  return db("projects").insert(project);
};

function addResource(resource) {
  return db("resources").insert(resource);
};

function addTask(task) {
  return db("tasks").insert(task);
};

