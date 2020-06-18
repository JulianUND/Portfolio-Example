'use strict'

var express = require('express');
var ProjectControllers = require('../controllers/project');

var router = express.Router();


// importacion de variables para la subida de imagenes 
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

router.get('/home',ProjectControllers.home);
router.post('/test',ProjectControllers.test);
router.post('/save-project',ProjectControllers.saveProject);
router.get('/project/:id?', ProjectControllers.getProject);
router.get('/projects',ProjectControllers.getProjects);
router.put('/project/:id',ProjectControllers.updateProject);
router.delete('/project/:id',ProjectControllers.deleteProject);
router.post('/upload-image/:id', multipartMiddleware , ProjectControllers.uploadImage);
router.get('/get-image/:image',ProjectControllers.getImageFile);

module.exports = router;