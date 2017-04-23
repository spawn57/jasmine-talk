var express = require('express');
var router = express.Router();

// Require controller modules
var userController = require('./userController');

function getUserDetails(req, res) {
	var user = userController.getUser(req.id);
	res.send(user);
};

/* GET request for one Book. */
router.get('/book/:id', getUserDetails); 
