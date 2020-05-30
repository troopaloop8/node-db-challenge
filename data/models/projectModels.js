const db = require("../database.js");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask,
  getTasksByProjectId,
  getResourcesByProjectId,
  getProjectInfoById,
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

function getProjectInfoById(id) {
  //grab object for project by Id, task by project id, resource by project id
  const prj = db("projects").where({ id }).first();
  const tsk = getTasksByProjectId(id);
  const rsc = getResourcesByProjectId(id);

  //combine objects into an array
  const prjInfo = [prj, tsk, rsc];
  //pass all the objects in the array into a promise
  return Promise.all(prjInfo).then((info) => {
    //desctructure the array from the promise
    const [prj, tsk, rsc] = info;

    //add the task and resrouce objects inside the project object
    prj.tasks = tsk;
    prj.resources = rsc;

    //return prj with the nested objects
    return prj;
  });
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
