const express = require("express");

const routes = express.Router();

const ComputerController = require("./controllers/computerController");

routes.post('/pc', ComputerController.store);
routes.get('/', (req, res)=>{
    res.send('funcionando')
})
module.exports = routes;