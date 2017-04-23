var userController = require('./userController');

exports.getUserDetails = function (req, res) {
	var user = userController.getUser(req.id);
	res.send(user);
};
