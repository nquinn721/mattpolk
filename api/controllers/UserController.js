/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login : function (req, res) {
		var username = req.param('username'),
			password = req.param('password');
		User.findOne({username : username, password : password})
		.then(function (user) {
			req.session.user = user;

			res.redirect('index');
		})
	},
	logout : function (req, res) {
		req.session.destroy();
		res.redirect('login');
	}
};

