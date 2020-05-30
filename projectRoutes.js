const express = require('express');
const knex = require('knex');
const router = express.Router();

const db = require('./data/models/projectModels.js');


//GET AND POST ENDPOINTS FOR PROJECTS, TASKS, AND RESOURCES

router
    .route("/")
    .get((req, res) => {
        db.getProjects()
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    })
    .post((req, res) => {
        db.addProject(req.body)
        .then(proj => {
            res.status(200).json({message: 'Successfully added Project', proj})
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    });

router
    .route("/tasks")
    .get((req, res) => {
        db.getTasks()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    })
    .post((req, res) => {
        db.addTask(req.body)
        .then(task => {
            res.status(200).json({message: 'Successfully added task', task})
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    });

router
    .route("/resources")
    .get((req, res) => {
        db.getResources()
        .then(resc => {
            res.status(200).json(resc)
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    })
    .post((req, res) => {
        db.addResource(req.body)
        .then(resc => {
            res.status(200).json({message: 'Successfully added resource', resc})
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    });

// ENDPOINTS TO CALL THE ID FOR INDIVIDUAL TASKS AND RESOURCES

router
    .route('/tasks/:id')
    .get((req, res) => {
        const {id} = req.params
        db.getTasks(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    });

router
    .route('/resources/:id')
    .get((req, res) => {
        const {id} = req.params
        db.getResources(id)
        .then(resc => {
            res.status(200).json(resc)
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}, ${err.message}`})
        })
    });



//EXPORT

module.exports = router
